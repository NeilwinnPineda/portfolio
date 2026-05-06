import {
  Component, OnDestroy, AfterViewInit,
  ElementRef, ViewChild, inject, PLATFORM_ID, signal
} from '@angular/core';
import { isPlatformBrowser, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';

const PARTICLE_MAX        = 500000;
const MESH_JSON_URL       = 'assets/images/mesh.json';
const CAMERA_Y_BASE_FACTOR = 0.08;
const MODEL_Y_LOCK_FACTOR  = 0.0;

interface MeshJson {
  positions: number[];
  indices?:  number[];
  normals?:  number[];
}

interface Sampler {
  positions:       number[];
  triangles:       [number, number, number][];
  cumulativeAreas: number[];
  totalArea:       number;
  size:            THREE.Vector3;
  center:          THREE.Vector3;
  maxDimension:    number;
}

interface Particle {
  base:         THREE.Vector3;
  seedA:        number;
  seedB:        number;
  seedC:        number;
  scale:        number;
  drift:        number;
  twinkleSpeed: number;
  hueOffset:    number;
}

@Component({
  selector:    'app-scene',
  imports:     [FormsModule, DecimalPipe],
  templateUrl: './scene.html',
  styleUrl:    './scene.css'
})
export class Scene implements AfterViewInit, OnDestroy {
  @ViewChild('stage') stageRef!: ElementRef<HTMLDivElement>;

  private platform  = inject(PLATFORM_ID);
  private rafId?:    number;
  private renderer?: THREE.WebGLRenderer;
  private resizeObs?: ResizeObserver;

  // ── Tunable parameters ──────────────────────────────────────────
  particleCount  = signal(20000);
  particleSize   = signal(1.0);
  driftAmount    = signal(1.0);
  orbitSpeed     = signal(1.0);
  hueSpeed       = signal(1.0);

  panelOpen       = signal(false);
  extremeUnlocked = signal(false);
  audioActive     = signal(false);

  private audioCtx?:  AudioContext;
  private analyser?:  AnalyserNode;
  private audioEl?:   HTMLAudioElement;
  private audioData?: Uint8Array<ArrayBuffer>;

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platform)) return;
    this.boot();
  }

  ngOnDestroy() {
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    this.resizeObs?.disconnect();
    this.renderer?.dispose();
    this.stopAudio();
  }

  async toggleAudio() {
    if (this.audioActive()) { this.stopAudio(); return; }

    const audio = new Audio('assets/mp3/Corporate Harmonics_1.49.mp3');
    audio.loop  = true;
    audio.crossOrigin = 'anonymous';

    this.audioCtx  = new AudioContext();
    this.analyser  = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 256;
    this.audioData = new Uint8Array(this.analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>;

    this.audioCtx.createMediaElementSource(audio)
      .connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);

    this.audioEl = audio;
    await audio.play();
    this.audioActive.set(true);
  }

  private stopAudio() {
    this.audioEl?.pause();
    this.audioCtx?.close();
    this.audioCtx = this.analyser = this.audioEl = this.audioData = undefined;
    this.audioActive.set(false);
  }

  readAudioDrift(): number {
    if (!this.analyser || !this.audioData) return this.driftAmount();
    this.analyser.getByteFrequencyData(this.audioData);
    let peak = 0;
    for (let i = 0; i < this.audioData.length; i++)
      if (this.audioData[i] > peak) peak = this.audioData[i];
    return Math.pow(peak / 255, 3.5) * 6;
  }

  private async boot() {
    const el = this.stageRef.nativeElement;

    // ── Scene ──────────────────────────────────────────────────────
    const BG_DARK  = new THREE.Color(0x020304);
    const BG_LIGHT = new THREE.Color(0xfaf5f2);

    let lightMode  = document.documentElement.classList.contains('light');
    const bgColor  = () => lightMode ? BG_LIGHT : BG_DARK;

    const scene  = new THREE.Scene();
    scene.background = bgColor().clone();
    scene.fog        = new THREE.FogExp2(bgColor().getHex(), 0.026);

    const camera = new THREE.PerspectiveCamera(58, el.clientWidth / el.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);
    this.renderer = renderer;

    const setSize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    setSize();
    this.resizeObs = new ResizeObserver(setSize);
    this.resizeObs.observe(el);

    // ── Stars ──────────────────────────────────────────────────────
    const starPos: number[] = [];
    for (let i = 0; i < 1800; i++) {
      starPos.push(
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 180
      );
    }
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({
      color:       0x7fd4ff,
      size:        0.045,
      transparent: true,
      opacity:     0.42,
      blending:    lightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite:  false
    }));
    scene.add(stars);

    // ── Load mesh ──────────────────────────────────────────────────
    const meshJson: MeshJson = await fetch(MESH_JSON_URL).then(r => r.json());
    const sampler      = this.buildSampler(meshJson);
    const target       = sampler.center.clone();
    const orbitRadius  = Math.max(sampler.maxDimension * 0.75, 4);
    const objectHeight = sampler.size.y;

    // ── Bead cloud — allocate max upfront ─────────────────────────
    const beadRadius = Math.max(sampler.maxDimension * 0.0012, 0.008);
    const beadGeo    = new THREE.SphereGeometry(beadRadius, 6, 6);
    const beadMat    = new THREE.MeshBasicMaterial({
      color:       0xffffff,
      transparent: true,
      opacity:     0.95,
      blending:    lightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite:  false
    });
    const beads = new THREE.InstancedMesh(beadGeo, beadMat, PARTICLE_MAX);

    const root = new THREE.Group();
    root.add(beads);
    scene.add(root);

    const driftBase    = Math.max(sampler.maxDimension * 0.003, 0.012);
    const particles: Particle[] = Array.from({ length: PARTICLE_MAX }, () => ({
      base:         this.randomSurface(sampler),
      seedA:        Math.random() * 1000,
      seedB:        Math.random() * 1000,
      seedC:        Math.random() * 1000,
      scale:        0.6  + Math.random() * 1.8,
      drift:        driftBase + Math.random() * driftBase * 2.4,
      twinkleSpeed: 1.6  + Math.random() * 2.8,
      hueOffset:    (Math.random() - 0.5) * 0.025
    }));

    // ── Theme sync ─────────────────────────────────────────────────
    const starMat  = stars.material as THREE.PointsMaterial;
    const htmlRoot = document.documentElement;
    const themeMix = () =>
      parseFloat(getComputedStyle(htmlRoot).getPropertyValue('--theme-mix')) / 100;

    const applyTheme = (toLight: boolean) => {
      lightMode = toLight;
      const bg  = bgColor();
      (scene.background as THREE.Color).copy(bg);
      (scene.fog as THREE.FogExp2).color.copy(bg);
      const b   = lightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
      beadMat.blending = b; beadMat.needsUpdate = true;
      starMat.blending = b; starMat.needsUpdate = true;
    };

    // ── Animate ────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();

    const tick = () => {
      this.rafId = requestAnimationFrame(tick);

      const nowLight = themeMix() > 0.5;
      if (nowLight !== lightMode) applyTheme(nowLight);

      const elapsed   = clock.getElapsedTime();
      const count     = this.particleCount();
      const sizeMul   = this.particleSize();
      const driftMul  = this.audioActive() ? this.readAudioDrift() : this.driftAmount();
      const orbitMul  = this.orbitSpeed();
      const hueMul    = this.hueSpeed();

      const orbitSpeed =
        0.16 * orbitMul +
        this.waveNoise(elapsed * 0.11, 3.7) * 0.06 * orbitMul +
        this.waveNoise(elapsed * 0.047, 9.1) * 0.02 * orbitMul;
      const orbit      = elapsed * orbitSpeed;
      const globalHue  = (elapsed * 0.12 * hueMul) % 1;
      const zoomDrift  =
        Math.sin(elapsed * 0.38) * (orbitRadius * 0.28) +
        this.waveNoise(elapsed * 0.17, 8.2) * (orbitRadius * 0.06);
      const zoom       = orbitRadius + zoomDrift;

      camera.position.set(
        target.x + Math.cos(orbit) * zoom,
        target.y + objectHeight * CAMERA_Y_BASE_FACTOR,
        target.z + Math.sin(orbit) * zoom
      );
      camera.lookAt(target);

      root.rotation.y += 0.0014;
      root.rotation.x  = Math.sin(elapsed * 0.22) * 0.035;
      root.rotation.z  = Math.cos(elapsed * 0.18) * 0.025;
      root.position.y  = objectHeight * MODEL_Y_LOCK_FACTOR;

      beads.count = count;

      for (let i = 0; i < count; i++) {
        const p  = particles[i];
        const dc = (n: number) => Math.sign(n) * Math.pow(Math.abs(n), 2.2);
        const ox = dc(this.waveNoise(elapsed * (1.05 + p.scale * 0.45), p.seedA)) * p.drift * driftMul;
        const oy = dc(this.waveNoise(elapsed * (1.18 + p.scale * 0.55), p.seedB)) * p.drift * driftMul;
        const oz = dc(this.waveNoise(elapsed * (0.96 + p.scale * 0.5),  p.seedC)) * p.drift * driftMul;
        dummy.position.set(p.base.x + ox, p.base.y + oy, p.base.z + oz);

        const twinkle = 0.72 + this.waveNoise(elapsed * p.twinkleSpeed, p.seedA * 4) * 0.28;
        dummy.scale.setScalar(p.scale * sizeMul * (0.9 + twinkle * 0.14));
        dummy.updateMatrix();
        beads.setMatrixAt(i, dummy.matrix);

        color.setHSL(
          ((globalHue + p.hueOffset) % 1 + 1) % 1,
          1.0,
          lightMode ? 0.22 + twinkle * 0.18 : 0.38 + twinkle * 0.32
        );
        beads.setColorAt(i, color);
      }

      beads.instanceMatrix.needsUpdate = true;
      if (beads.instanceColor) beads.instanceColor.needsUpdate = true;
      (beadMat as THREE.MeshBasicMaterial).opacity =
        0.76 + this.waveNoise(elapsed * 1.55, 5.8) * 0.12;

      stars.material.color.setHSL((globalHue + 0.08) % 1, 0.9, lightMode ? 0.28 : 0.62);
      stars.rotation.y += 0.0004;
      stars.rotation.x  = this.waveNoise(elapsed * 0.08, 12.4) * 0.03;

      renderer.render(scene, camera);
    };

    tick();
  }

  // ── Mesh helpers ────────────────────────────────────────────────
  private vertex(positions: number[], idx: number, out: THREE.Vector3) {
    const i = idx * 3;
    return out.set(positions[i], positions[i + 1], positions[i + 2]);
  }

  private buildSampler(mesh: MeshJson): Sampler {
    const pos     = mesh.positions;
    const indices = mesh.indices?.length
      ? mesh.indices
      : Array.from({ length: pos.length / 3 }, (_, i) => i);

    const triangles: [number, number, number][] = [];
    const cumAreas: number[] = [];
    let total = 0;

    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    const ab = new THREE.Vector3(), ac = new THREE.Vector3(), cross = new THREE.Vector3();
    const bounds = new THREE.Box3();

    for (let i = 0; i < pos.length / 3; i++)
      bounds.expandByPoint(this.vertex(pos, i, new THREE.Vector3()));

    for (let i = 0; i < indices.length; i += 3) {
      this.vertex(pos, indices[i],     a);
      this.vertex(pos, indices[i + 1], b);
      this.vertex(pos, indices[i + 2], c);
      ab.subVectors(b, a); ac.subVectors(c, a);
      cross.crossVectors(ab, ac);
      const area = cross.length() * 0.5;
      if (area <= 0.000001) continue;
      total += area;
      cumAreas.push(total);
      triangles.push([indices[i], indices[i + 1], indices[i + 2]]);
    }

    const size   = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    return { positions: pos, triangles, cumulativeAreas: cumAreas, totalArea: total, size, center, maxDimension: Math.max(size.x, size.y, size.z) };
  }

  private randomSurface(s: Sampler): THREE.Vector3 {
    const r  = Math.random() * s.totalArea;
    let lo = 0, hi = s.cumulativeAreas.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      r <= s.cumulativeAreas[mid] ? hi = mid : lo = mid + 1;
    }
    const [ia, ib, ic] = s.triangles[lo];
    const a = this.vertex(s.positions, ia, new THREE.Vector3());
    const b = this.vertex(s.positions, ib, new THREE.Vector3());
    const c = this.vertex(s.positions, ic, new THREE.Vector3());

    let u = Math.random(), v = Math.random();
    if (u + v > 1) { u = 1 - u; v = 1 - v; }
    return new THREE.Vector3()
      .copy(a)
      .addScaledVector(new THREE.Vector3().subVectors(b, a), u)
      .addScaledVector(new THREE.Vector3().subVectors(c, a), v);
  }

  private waveNoise(t: number, seed: number): number {
    const a = Math.sin(t + seed);
    const b = Math.sin(t * 0.53 + seed * 1.91);
    const c = Math.sin(t * 1.73 + seed * 0.37);
    return (a * 0.55 + b * 0.3 + c * 0.15);
  }
}
