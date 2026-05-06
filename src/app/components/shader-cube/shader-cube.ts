import {
  AfterViewInit, Component, ElementRef,
  inject, NgZone, OnDestroy, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-shader-cube',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './shader-cube.css'
})
export class ShaderCube implements AfterViewInit, OnDestroy {
  private el        = inject(ElementRef);
  private zone      = inject(NgZone);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private renderer!: THREE.WebGLRenderer;
  private animId    = 0;
  private observer?: ResizeObserver;

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    this.zone.runOutsideAngular(() => this.init());
  }

  private init() {
    const host = this.el.nativeElement as HTMLElement;
    const w = host.clientWidth;
    const h = host.clientHeight;

    /* ── Scene ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 4;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    host.appendChild(this.renderer.domElement);

    /* ── Shader material (brand palette) ── */
    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal   = normal;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(vNormal.z), 2.0);
          float pulse   = 0.5 + 0.5 * sin(time + vPosition.y * 6.0);

          vec3 base   = vec3(0.855, 0.376, 0.145); // spicy-paprika  #da6025
          vec3 accent = vec3(0.745, 0.051, 0.490); // medium-violet-red #be0d7d

          vec3 color = mix(base, accent, fresnel + pulse * 0.25);
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const cube = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
    scene.add(cube);

    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(cube.geometry),
      new THREE.LineBasicMaterial({ color: 0xf1d0c3, transparent: true, opacity: 0.5 })
    );
    cube.add(wire);

    /* ── Animation loop ── */
    const clock = new THREE.Clock();
    const animate = () => {
      this.animId = requestAnimationFrame(animate);
      material.uniforms['time'].value = clock.getElapsedTime();
      cube.rotation.x += 0.008;
      cube.rotation.y += 0.012;
      this.renderer.render(scene, camera);
    };
    animate();

    /* ── Resize ── */
    this.observer = new ResizeObserver(() => {
      const nw = host.clientWidth;
      const nh = host.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      this.renderer.setSize(nw, nh);
    });
    this.observer.observe(host);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    this.observer?.disconnect();
    this.renderer?.dispose();
  }
}
