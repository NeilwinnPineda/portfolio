import{$ as Vc,$a as Le,Ab as qc,Ba as rn,Bb as Ka,Ca as Ja,Da as Li,Ea as rr,Fb as Yc,Ga as zc,H as Is,J as Ya,Ja as hi,Jb as $n,Ka as Kt,Kb as Zn,L as ir,La as Qt,Lb as $c,Ma as Gc,N as dn,Na as fi,Oa as Wt,Pa as Xt,Qa as pi,Ra as we,S as gt,Sa as De,T as _t,Ta as bt,U as it,Ua as K,V as Pt,Va as ne,Wa as st,Xa as Ln,Ya as Dt,Za as en,_ as Ds,_a as En,a as Tt,b as jt,da as mt,db as Os,eb as Fs,fa as kc,fb as Ls,g as Lc,ga as $a,gb as Hc,ha as Fi,hb as kt,ib as ja,j as Nc,kb as ie,la as di,lb as je,mb as Ni,nb as Fr,o as Uc,ob as Ns,pa as Vt,pb as sr,qa as te,qb as Wc,rb as Lr,t as Bc,tb as Ui,ub as qt,wa as Za,xa as hn,yb as Xc}from"./chunk-A3MJMGQZ.js";var _u=0,Dl=1,vu=2;var cs=1,xu=2,Er=3,ni=0,nn=1,Gn=2,Hn=0,tn=1,Rn=2,Ol=3,Fl=4,yu=5;var bi=100,Mu=101,bu=102,Su=103,Eu=104,wu=200,Cu=201,Au=202,Tu=203,ao=204,lo=205,Pu=206,Ru=207,Iu=208,Du=209,Ou=210,Fu=211,Lu=212,Nu=213,Uu=214,co=0,uo=1,ho=2,Hi=3,fo=4,po=5,mo=6,go=7,Ll=0,Bu=1,Vu=2,In=0,Nl=1,Ul=2,Bl=3,Vl=4,kl=5,zl=6,Gl=7;var bl=300,Ti=301,Ji=302,Vo=303,ko=304,us=306,_o=1e3,Bn=1001,vo=1002,Bt=1003,ku=1004;var ds=1005;var Gt=1006,zo=1007;var Pi=1008;var vn=1009,Hl=1010,Wl=1011,wr=1012,Go=1013,Dn=1014,Mn=1015,Wn=1016,Ho=1017,Wo=1018,Cr=1020,Xl=35902,ql=35899,Yl=1021,$l=1022,bn=1023,Vn=1026,Ri=1027,Xo=1028,qo=1029,Ii=1030,Yo=1031;var $o=1033,hs=33776,fs=33777,ps=33778,ms=33779,Zo=35840,Jo=35841,jo=35842,Ko=35843,Qo=36196,ea=37492,ta=37496,na=37488,ia=37489,gs=37490,ra=37491,sa=37808,oa=37809,aa=37810,la=37811,ca=37812,ua=37813,da=37814,ha=37815,fa=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,xa=36492,ya=36494,Ma=36495,ba=36283,Sa=36284,_s=36285,Ea=36286;var Hr=2300,xo=2301,oo=2302,Sl=2303,El=2400,wl=2401,Cl=2402;var zu=3200;var Zl=0,Gu=1,oi="",zt="srgb",Wr="srgb-linear",Xr="linear",rt="srgb";var Gi=7680;var Al=519,Hu=512,Wu=513,Xu=514,wa=515,qu=516,Yu=517,Ca=518,$u=519,Tl=35044;var Jl="300 es",Tn=2e3,qr=2001;function ch(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){let i=Yr("canvas");return i.style.display="block",i}var Zc={},yr=null;function jl(...i){let e="THREE."+i.shift();yr?yr("log",e,...i):console.log(e,...i)}function Ju(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Ju(i);let e="THREE."+i.shift();if(yr)yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=Ju(i);let e="THREE."+i.shift();if(yr)yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yo(...i){let e=i.join(" ");e in Zc||(Zc[e]=!0,Oe(...i))}function ju(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Ku={[co]:uo,[ho]:mo,[fo]:go,[Hi]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:Hi},kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qa=Math.PI/180,Mo=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function el(i,e,t){return(1-t)*i+t*e}function Nr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],f=n[r+2],p=n[r+3],u=s[o+0],m=s[o+1],_=s[o+2],b=s[o+3];if(p!==b||l!==u||c!==m||f!==_){let h=l*u+c*m+f*_+p*b;h<0&&(u=-u,m=-m,_=-_,b=-b,h=-h);let d=1-a;if(h<.9995){let M=Math.acos(h),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,l=l*d+u*a,c=c*d+m*a,f=f*d+_*a,p=p*d+b*a}else{l=l*d+u*a,c=c*d+m*a,f=f*d+_*a,p=p*d+b*a;let M=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=M,c*=M,f*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],f=n[r+3],p=s[o],u=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+f*p+l*m-c*u,e[t+1]=l*_+f*u+c*p-a*m,e[t+2]=c*_+f*m+a*u-l*p,e[t+3]=f*_-a*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(r/2),p=a(s/2),u=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=u*f*p+c*m*_,this._y=c*m*p-u*f*_,this._z=c*f*_+u*m*p,this._w=c*f*p-u*m*_;break;case"YXZ":this._x=u*f*p+c*m*_,this._y=c*m*p-u*f*_,this._z=c*f*_-u*m*p,this._w=c*f*p+u*m*_;break;case"ZXY":this._x=u*f*p-c*m*_,this._y=c*m*p+u*f*_,this._z=c*f*_+u*m*p,this._w=c*f*p-u*m*_;break;case"ZYX":this._x=u*f*p-c*m*_,this._y=c*m*p+u*f*_,this._z=c*f*_-u*m*p,this._w=c*f*p+u*m*_;break;case"YZX":this._x=u*f*p+c*m*_,this._y=c*m*p+u*f*_,this._z=c*f*_-u*m*p,this._w=c*f*p-u*m*_;break;case"XZY":this._x=u*f*p-c*m*_,this._y=c*m*p-u*f*_,this._z=c*f*_+u*m*p,this._w=c*f*p+u*m*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],p=t[10],u=n+a+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-r*a,this._w=o*f-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),f=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*f,this.y=n+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new D,Jc=new zn,Be=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],p=n[7],u=n[2],m=n[5],_=n[8],b=r[0],h=r[3],d=r[6],M=r[1],w=r[4],E=r[7],T=r[2],S=r[5],P=r[8];return s[0]=o*b+a*M+l*T,s[3]=o*h+a*w+l*S,s[6]=o*d+a*E+l*P,s[1]=c*b+f*M+p*T,s[4]=c*h+f*w+p*S,s[7]=c*d+f*E+p*P,s[2]=u*b+m*M+_*T,s[5]=u*h+m*w+_*S,s[8]=u*d+m*E+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*s*f+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,u=a*l-f*s,m=c*s-o*l,_=t*p+n*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=p*b,e[1]=(r*c-f*n)*b,e[2]=(a*n-r*o)*b,e[3]=u*b,e[4]=(f*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nl=new Be,jc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){let i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?Xr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:jc,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:jc,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var Je=hh();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var or,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=Yr("canvas")),or.width=e.width,or.height=e.height;let r=or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fh=0,Mr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(il(r[o].image)):s.push(il(r[o]))}else s=il(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var ph=0,rl=new D,ai=(()=>{class i extends kn{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Bn,s=Bn,o=Gt,a=Pi,l=bn,c=vn,f=i.DEFAULT_ANISOTROPY,p=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=vs(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=bl,i.DEFAULT_ANISOTROPY=1,i})(),Et=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],f=l[4],p=l[8],u=l[1],m=l[5],_=l[9],b=l[2],h=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(_-h)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(_+h)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,E=(m+1)/2,T=(d+1)/2,S=(f+u)/4,P=(p+b)/4,v=(_+h)/4;return w>E&&w>T?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=S/n,s=P/n):E>T?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=S/r,s=v/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=P/s,r=v/s),this.set(n,r,s,t),this}let M=Math.sqrt((h-_)*(h-_)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(h-_)/M,this.y=(p-b)/M,this.z=(u-f)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},So=class extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new ai(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends So{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,o,a,l,c,f,p,u,m,_,b,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,f,p,u,m,_,b,h)}set(e,t,n,r,s,o,a,l,c,f,p,u,m,_,b,h){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=u,d[3]=m,d[7]=_,d[11]=b,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let u=o*f,m=o*p,_=a*f,b=a*p;t[0]=l*f,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=u-b*c,t[9]=-a*l,t[2]=b-u*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*f,m=l*p,_=c*f,b=c*p;t[0]=u+b*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*f,t[9]=-a,t[2]=m*a-_,t[6]=b+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*f,m=l*p,_=c*f,b=c*p;t[0]=u-b*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*f,t[9]=b-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*f,m=o*p,_=a*f,b=a*p;t[0]=l*f,t[4]=_*c-m,t[8]=u*c+b,t[1]=l*p,t[5]=b*c+u,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,_=a*l,b=a*c;t[0]=l*f,t[4]=b-u*p,t[8]=_*p+m,t[1]=p,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=m*p+_,t[10]=u-b*p}else if(e.order==="XZY"){let u=o*l,m=o*c,_=a*l,b=a*c;t[0]=l*f,t[4]=-p,t[8]=c*f,t[1]=u*p+b,t[5]=o*f,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*f,t[10]=b*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,gh)}lookAt(e,t,n){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),mi.crossVectors(n,fn),mi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),mi.crossVectors(n,fn)),mi.normalize(),Us.crossVectors(fn,mi),r[0]=mi.x,r[4]=Us.x,r[8]=fn.x,r[1]=mi.y,r[5]=Us.y,r[9]=fn.y,r[2]=mi.z,r[6]=Us.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],p=n[5],u=n[9],m=n[13],_=n[2],b=n[6],h=n[10],d=n[14],M=n[3],w=n[7],E=n[11],T=n[15],S=r[0],P=r[4],v=r[8],C=r[12],L=r[1],A=r[5],B=r[9],H=r[13],q=r[2],O=r[6],z=r[10],U=r[14],j=r[3],J=r[7],re=r[11],ce=r[15];return s[0]=o*S+a*L+l*q+c*j,s[4]=o*P+a*A+l*O+c*J,s[8]=o*v+a*B+l*z+c*re,s[12]=o*C+a*H+l*U+c*ce,s[1]=f*S+p*L+u*q+m*j,s[5]=f*P+p*A+u*O+m*J,s[9]=f*v+p*B+u*z+m*re,s[13]=f*C+p*H+u*U+m*ce,s[2]=_*S+b*L+h*q+d*j,s[6]=_*P+b*A+h*O+d*J,s[10]=_*v+b*B+h*z+d*re,s[14]=_*C+b*H+h*U+d*ce,s[3]=M*S+w*L+E*q+T*j,s[7]=M*P+w*A+E*O+T*J,s[11]=M*v+w*B+E*z+T*re,s[15]=M*C+w*H+E*U+T*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],u=e[10],m=e[14],_=e[3],b=e[7],h=e[11],d=e[15],M=l*m-c*u,w=a*m-c*p,E=a*u-l*p,T=o*m-c*f,S=o*u-l*f,P=o*p-a*f;return t*(b*M-h*w+d*E)-n*(_*M-h*T+d*S)+r*(_*w-b*T+d*P)-s*(_*E-b*S+h*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],u=e[10],m=e[11],_=e[12],b=e[13],h=e[14],d=e[15],M=t*a-n*o,w=t*l-r*o,E=t*c-s*o,T=n*l-r*a,S=n*c-s*a,P=r*c-s*l,v=f*b-p*_,C=f*h-u*_,L=f*d-m*_,A=p*h-u*b,B=p*d-m*b,H=u*d-m*h,q=M*H-w*B+E*A+T*L-S*C+P*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return e[0]=(a*H-l*B+c*A)*O,e[1]=(r*B-n*H-s*A)*O,e[2]=(b*P-h*S+d*T)*O,e[3]=(u*S-p*P-m*T)*O,e[4]=(l*L-o*H-c*C)*O,e[5]=(t*H-r*L+s*C)*O,e[6]=(h*E-_*P-d*w)*O,e[7]=(f*P-u*E+m*w)*O,e[8]=(o*B-a*L+c*v)*O,e[9]=(n*L-t*B-s*v)*O,e[10]=(_*S-b*E+d*M)*O,e[11]=(p*E-f*S-m*M)*O,e[12]=(a*C-o*A-l*v)*O,e[13]=(t*A-n*C+r*v)*O,e[14]=(b*w-_*T-h*M)*O,e[15]=(f*T-p*w+u*M)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+n,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,p=a+a,u=s*c,m=s*f,_=s*p,b=o*f,h=o*p,d=a*p,M=l*c,w=l*f,E=l*p,T=n.x,S=n.y,P=n.z;return r[0]=(1-(b+d))*T,r[1]=(m+E)*T,r[2]=(_-w)*T,r[3]=0,r[4]=(m-E)*S,r[5]=(1-(u+d))*S,r[6]=(h+M)*S,r[7]=0,r[8]=(_+w)*P,r[9]=(h-M)*P,r[10]=(1-(u+b))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ar.set(r[0],r[1],r[2]).length(),a=ar.set(r[4],r[5],r[6]).length(),l=ar.set(r[8],r[9],r[10]).length();s<0&&(o=-o),wn.copy(this);let c=1/o,f=1/a,p=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=f,wn.elements[5]*=f,wn.elements[6]*=f,wn.elements[8]*=p,wn.elements[9]*=p,wn.elements[10]*=p,t.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Tn,l=!1){let c=this.elements,f=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r),_,b;if(l)_=s/(o-s),b=o*s/(o-s);else if(a===Tn)_=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===qr)_=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Tn,l=!1){let c=this.elements,f=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r),_,b;if(l)_=1/(o-s),b=o/(o-s);else if(a===Tn)_=-2/(o-s),b=-(o+s)/(o-s);else if(a===qr)_=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new D,wn=new vt,mh=new D(0,0,0),gh=new D(1,1,1),mi=new D,Us=new D,fn=new D,Qc=new vt,eu=new zn,Zr=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],f=s[5],p=s[9],u=s[2],m=s[6],_=s[10];switch(n){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,_),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_h=0,tu=new D,lr=new zn,Jn=new vt,Bs=new D,Ur=new D,vh=new D,xh=new zn,nu=new D(1,0,0),iu=new D(0,1,0),ru=new D(0,0,1),su={type:"added"},yh={type:"removed"},cr={type:"childadded",child:null},sl={type:"childremoved",child:null},Sn=(()=>{class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,n=new Zr,r=new zn,s=new D(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return lr.setFromAxisAngle(t,n),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,n){return lr.setFromAxisAngle(t,n),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(ru,t)}translateOnAxis(t,n){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Bs.copy(t):Bs.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ur,Bs,this.up):Jn.lookAt(Bs,Ur,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Jn),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),cr.child=t,this.dispatchEvent(cr),cr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yh),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*r-o[8]*s,o[13]+=r-o[1]*n-o[5]*r-o[9]*s,o[14]+=s-o[2]*n-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>jt(Tt({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Tt({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let f=0,p=c.length;f<p;f++){let u=c[f];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,f=this.material.length;c<f;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),f=a(t.textures),p=a(t.images),u=a(t.shapes),m=a(t.skeletons),_=a(t.animations),b=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),f.length>0&&(r.textures=f),p.length>0&&(r.images=p),u.length>0&&(r.shapes=u),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),b.length>0&&(r.nodes=b)}return r.object=s,r;function a(l){let c=[];for(let f in l){let p=l[f];delete p.metadata,c.push(p)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new D(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Pn=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mh={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let h=t.getJointPose(b,n),d=this._getHandJoint(c,b);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=dh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ol(o,s,e+1/3),this.g=ol(o,s,e),this.b=ol(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Je.workingToColorSpace($t.copy(this),e),Math.round(Ke($t.r*255,0,255))*65536+Math.round(Ke($t.g*255,0,255))*256+Math.round(Ke($t.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace($t.copy(this),t);let n=$t.r,r=$t.g,s=$t.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=zt){Je.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,r=$t.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Vs);let n=el(gi.h,Vs.h,t),r=el(gi.s,Vs.s,t),s=el(gi.l,Vs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new We;We.NAMES=Qu;var Wi=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xi=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new D,jn=new D,al=new D,Kn=new D,ur=new D,dr=new D,ou=new D,ll=new D,cl=new D,ul=new D,dl=new Et,hl=new Et,fl=new Et,Mi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Cn.subVectors(e,t),r.cross(Cn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Cn.subVectors(r,t),jn.subVectors(n,t),al.subVectors(e,t);let o=Cn.dot(Cn),a=Cn.dot(jn),l=Cn.dot(al),c=jn.dot(jn),f=jn.dot(al),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;let u=1/p,m=(c*l-a*f)*u,_=(o*f-a*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return dl.setScalar(0),hl.setScalar(0),fl.setScalar(0),dl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(dl,s.x),o.addScaledVector(hl,s.y),o.addScaledVector(fl,s.z),o}static isFrontFacing(e,t,n,r){return Cn.subVectors(n,t),jn.subVectors(e,t),Cn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ur.subVectors(r,n),dr.subVectors(s,n),ll.subVectors(e,n);let l=ur.dot(ll),c=dr.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,r);let f=ur.dot(cl),p=dr.dot(cl);if(f>=0&&p<=f)return t.copy(r);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(ur,o);ul.subVectors(e,s);let m=ur.dot(ul),_=dr.dot(ul);if(_>=0&&m<=_)return t.copy(s);let b=m*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(dr,a);let h=f*_-m*p;if(h<=0&&p-f>=0&&m-_>=0)return ou.subVectors(s,r),a=(p-f)/(p-f+(m-_)),t.copy(r).addScaledVector(ou,a);let d=1/(h+b+u);return o=b*d,a=u*d,t.copy(n).addScaledVector(ur,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),zs.subVectors(this.max,Br),hr.subVectors(e.a,Br),fr.subVectors(e.b,Br),pr.subVectors(e.c,Br),_i.subVectors(fr,hr),vi.subVectors(pr,fr),Bi.subVectors(hr,pr);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Bi.y,Bi.x,0];return!pl(t,hr,fr,pr,zs)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,hr,fr,pr,zs))?!1:(Gs.crossVectors(_i,vi),t=[Gs.x,Gs.y,Gs.z],pl(t,hr,fr,pr,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new D,new D,new D,new D,new D,new D,new D,new D],An=new D,ks=new an,hr=new D,fr=new D,pr=new D,_i=new D,vi=new D,Bi=new D,Br=new D,zs=new D,Gs=new D,Vi=new D;function pl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Vi.fromArray(i,s);let a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),f=n.dot(Vi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Rt=new D,Hs=new ot,bh=0,on=class extends kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ot=class extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sh=new an,Vr=new D,ml=new D,ii=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(ml)),this.expandByPoint(Vr.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eh=0,yn=new vt,gl=new Sn,mr=new D,pn=new an,kr=new an,Nt=new D,Zt=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?Kr:jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(pn.min,kr.min),pn.expandByPoint(Nt),Nt.addVectors(pn.max,kr.max),pn.expandByPoint(Nt)):(pn.expandByPoint(kr.min),pn.expandByPoint(kr.max))}pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Nt.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),Nt.add(mr)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new D,l[v]=new D;let c=new D,f=new D,p=new D,u=new ot,m=new ot,_=new ot,b=new D,h=new D;function d(v,C,L){c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,C),p.fromBufferAttribute(n,L),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,L),f.sub(c),p.sub(c),m.sub(u),_.sub(u);let A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(b.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(A),h.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(A),a[v].add(b),a[C].add(b),a[L].add(b),l[v].add(h),l[C].add(h),l[L].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,C=M.length;v<C;++v){let L=M[v],A=L.start,B=L.count;for(let H=A,q=A+B;H<q;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let w=new D,E=new D,T=new D,S=new D;function P(v){T.fromBufferAttribute(r,v),S.copy(T);let C=a[v];w.copy(C),w.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(S,C);let A=E.dot(l[v])<0?-1:1;o.setXYZW(v,w.x,w.y,w.z,A)}for(let v=0,C=M.length;v<C;++v){let L=M[v],A=L.start,B=L.count;for(let H=A,q=A+B;H<q;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,p=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),b=e.getX(u+1),h=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,h),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,h),a.add(f),l.add(f),c.add(f),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,f=a.itemSize,p=a.normalized,u=new c.constructor(l.length*f),m=0,_=0;for(let b=0,h=l.length;b<h;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*f;for(let d=0;d<f;d++)u[_++]=c[m++]}return new on(u,f,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){let u=c[f],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let f=r[c];this.setAttribute(c,f.clone(t))}let s=e.morphAttributes;for(let c in s){let f=[],p=s[c];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,f=o.length;c<f;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wh=0,Si=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=tn,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=lo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tn&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ei=new D,_l=new D,Ws=new D,xi=new D,vl=new D,Xs=new D,xl=new D,Qr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_l.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(_l);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=xi.dot(this.direction),l=-xi.dot(Ws),c=xi.lengthSq(),f=Math.abs(1-o*o),p,u,m,_;if(f>0)if(p=o*l-a,u=o*a-l,_=s*f,p>=0)if(u>=-_)if(u<=_){let b=1/f;p*=b,u*=b,m=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=s,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(_l).addScaledVector(Ws,u),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,s){vl.subVectors(t,e),Xs.subVectors(n,e),xl.crossVectors(vl,Xs);let o=this.direction.dot(xl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);let l=a*this.direction.dot(Xs.crossVectors(xi,Xs));if(l<0)return null;let c=a*this.direction.dot(vl.cross(xi));if(c<0||l+c>o)return null;let f=-a*xi.dot(xl);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},au=new vt,ki=new Qr,qs=new ii,lu=new D,Ys=new D,$s=new D,Zs=new D,yl=new D,Js=new D,cu=new D,js=new D,ln=class extends Sn{constructor(e=new Zt,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],p=s[l];f!==0&&(yl.fromBufferAttribute(p,e),o?Js.addScaledVector(yl,f):Js.addScaledVector(yl.sub(t),f))}t.add(Js)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(qs.containsPoint(ki.origin)===!1&&(ki.intersectSphere(qs,lu)===null||ki.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(au.copy(s).invert(),ki.copy(e.ray).applyMatrix4(au),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=u.length;_<b;_++){let h=u[_],d=o[h.materialIndex],M=Math.max(h.start,m.start),w=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let E=M,T=w;E<T;E+=3){let S=a.getX(E),P=a.getX(E+1),v=a.getX(E+2);r=Ks(this,d,e,n,c,f,p,S,P,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let h=_,d=b;h<d;h+=3){let M=a.getX(h),w=a.getX(h+1),E=a.getX(h+2);r=Ks(this,o,e,n,c,f,p,M,w,E),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=u.length;_<b;_++){let h=u[_],d=o[h.materialIndex],M=Math.max(h.start,m.start),w=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let E=M,T=w;E<T;E+=3){let S=E,P=E+1,v=E+2;r=Ks(this,d,e,n,c,f,p,S,P,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let h=_,d=b;h<d;h+=3){let M=h,w=h+1,E=h+2;r=Ks(this,o,e,n,c,f,p,M,w,E),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}};function Ch(i,e,t,n,r,s,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ni,a),l===null)return null;js.copy(a),js.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function Ks(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ys),i.getVertexPosition(l,$s),i.getVertexPosition(c,Zs);let f=Ch(i,e,t,n,Ys,$s,Zs,cu);if(f){let p=new D;Mi.getBarycoord(cu,Ys,$s,Zs,p),r&&(f.uv=Mi.getInterpolatedAttribute(r,a,l,c,p,new ot)),s&&(f.uv1=Mi.getInterpolatedAttribute(s,a,l,c,p,new ot)),o&&(f.normal=Mi.getInterpolatedAttribute(o,a,l,c,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Mi.getNormal(Ys,$s,Zs,u.normal),f.face=u,f.barycoord=p}return f}var es=class extends ai{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Bt,f=Bt,p,u){super(null,o,a,l,c,f,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends on{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new vt,uu=new vt,Qs=[],du=new an,Ah=new vt,zr=new ln,Gr=new ii,qi=class extends ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ah)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),du.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Gr.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gr),uu.multiplyMatrices(n,gr),zr.matrixWorld=uu,zr.raycast(e,Qs);for(let o=0,a=Qs.length;o<a;o++){let l=Qs[o];l.instanceId=s,l.object=this,t.push(l)}Qs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new es(new Float32Array(r*this.count),r,this.count,Xo,Mn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ml=new D,Th=new D,Ph=new Be,Un=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ml.subVectors(n,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ml),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ph.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new ii,Rh=new ot(.5,.5),eo=new D,ns=class{constructor(e=new Un,t=new Un,n=new Un,r=new Un,s=new Un,o=new Un){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],p=s[5],u=s[6],m=s[7],_=s[8],b=s[9],h=s[10],d=s[11],M=s[12],w=s[13],E=s[14],T=s[15];if(r[0].setComponents(c-o,m-f,d-_,T-M).normalize(),r[1].setComponents(c+o,m+f,d+_,T+M).normalize(),r[2].setComponents(c+a,m+p,d+b,T+w).normalize(),r[3].setComponents(c-a,m-p,d-b,T-w).normalize(),n)r[4].setComponents(l,u,h,E).normalize(),r[5].setComponents(c-l,m-u,d-h,T-E).normalize();else if(r[4].setComponents(c-l,m-u,d-h,T-E).normalize(),t===Tn)r[5].setComponents(c+l,m+u,d+h,T+E).normalize();else if(t===qr)r[5].setComponents(l,u,h,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=Rh.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(eo.x=r.normal.x>0?e.max.x:e.min.x,eo.y=r.normal.y>0?e.max.y:e.min.y,eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ei=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hu=new vt,Pl=new Qr,to=new ii,no=new D,Yi=class extends Sn{constructor(e=new Zt,t=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;hu.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(hu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=u,b=m;_<b;_++){let h=c.getX(_);no.fromBufferAttribute(p,h),fu(no,h,l,r,e,t,this)}}else{let u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=u,b=m;_<b;_++)no.fromBufferAttribute(p,_),fu(no,_,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function fu(i,e,t,n,r,s,o){let a=Pl.distanceSqToPoint(i);if(a<t){let l=new D;Pl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var is=class extends ai{constructor(e=[],t=Ti,n,r,s,o,a,l,c,f){super(e,t,n,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var si=class extends ai{constructor(e,t,n=Dn,r,s,o,a=Bt,l=Bt,c,f=Vn,p=1){if(f!==Vn&&f!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,r,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wo=class extends si{constructor(e,t=Dn,n=Ti,r,s,o=Bt,a=Bt,l,c=Vn){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},rs=class extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sr=class i extends Zt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],p=[],u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2));function _(b,h,d,M,w,E,T,S,P,v,C){let L=E/P,A=T/v,B=E/2,H=T/2,q=S/2,O=P+1,z=v+1,U=0,j=0,J=new D;for(let re=0;re<z;re++){let ce=re*A-H;for(let Se=0;Se<O;Se++){let Xe=Se*L-B;J[b]=Xe*M,J[h]=ce*w,J[d]=q,c.push(J.x,J.y,J.z),J[b]=0,J[h]=0,J[d]=S>0?1:-1,f.push(J.x,J.y,J.z),p.push(Se/P),p.push(1-re/v),U+=1}}for(let re=0;re<v;re++)for(let ce=0;ce<P;ce++){let Se=u+ce+O*re,Xe=u+ce+O*(re+1),et=u+(ce+1)+O*(re+1),Ne=u+(ce+1)+O*re;l.push(Se,Xe,Ne),l.push(Xe,et,Ne),j+=6}a.addGroup(m,j,C),m+=j,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ss=class i extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,f=l+1,p=e/a,u=t/l,m=[],_=[],b=[],h=[];for(let d=0;d<f;d++){let M=d*u-o;for(let w=0;w<c;w++){let E=w*p-s;_.push(E,-M,0),b.push(0,0,1),h.push(w/a),h.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let w=M+c*d,E=M+c*(d+1),T=M+1+c*(d+1),S=M+1+c*d;m.push(w,E,S),m.push(E,T,S)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var $i=class i extends Zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],p=new D,u=new D,m=[],_=[],b=[],h=[];for(let d=0;d<=n;d++){let M=[],w=d/n,E=0;d===0&&o===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){let S=T/t;p.x=-e*Math.cos(r+S*s)*Math.sin(o+w*a),p.y=e*Math.cos(o+w*a),p.z=e*Math.sin(r+S*s)*Math.sin(o+w*a),_.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),h.push(S+E,1-w),M.push(c++)}f.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let w=f[d][M+1],E=f[d][M],T=f[d+1][M],S=f[d+1][M+1];(d!==0||o>0)&&m.push(w,E,S),(d!==n-1||l<Math.PI)&&m.push(E,T,S)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(pu(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(pu(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=ji(i[t]);for(let r in n)e[r]=n[r]}return e}function pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ih(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var ed={clone:ji,merge:Jt},Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Co=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ao=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},To=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function io(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Po=class extends wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case wl:s=e,a=2*t-n;break;case Cl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:o=e,l=2*n-t;break;case Cl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(r-t),b=_*_,h=b*_,d=-u*h+2*u*b-u*_,M=(1+u)*h+(-1.5-2*u)*b+(-.5+u)*_+1,w=(-1-m)*h+(1.5+m)*b+.5*_,E=m*h-m*b;for(let T=0;T!==a;++T)s[T]=d*o[f+T]+M*o[c+T]+w*o[l+T]+E*o[p+T];return s}},Ro=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(n-t)/(r-t),p=1-f;for(let u=0;u!==a;++u)s[u]=o[c+u]*p+o[l+u]*f;return s}},Io=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends wi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this.settings||this.DefaultSettings_,p=f.inTangents,u=f.outTangents;if(!p||!u){let b=(n-t)/(r-t),h=1-b;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*b;return s}let m=a*2,_=e-1;for(let b=0;b!==a;++b){let h=o[c+b],d=o[l+b],M=_*m+b*2,w=u[M],E=u[M+1],T=e*m+b*2,S=p[T],P=p[T+1],v=(n-t)/(r-t),C,L,A,B,H;for(let q=0;q<8;q++){C=v*v,L=C*v,A=1-v,B=A*A,H=B*A;let z=H*t+3*B*v*w+3*A*C*S+L*r-n;if(Math.abs(z)<1e-10)break;let U=3*B*(w-t)+6*A*v*(S-w)+3*C*(r-S);if(Math.abs(U)<1e-10)break;v=v-z/U,v=Math.max(0,Math.min(1,v))}s[b]=H*h+3*B*v*E+3*A*C*P+L*d}return s}},_n=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case oo:t=this.InterpolantFactoryMethodSmooth;break;case Sl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Fe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&uh(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===oo,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(r)l=!0;else{let p=a*n,u=p-n,m=p+n;for(let _=0;_!==n;++_){let b=t[p+_];if(b!==t[u+_]||b!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[p+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=xo;var Ci=class extends _n{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Hr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends _n{constructor(e,t,n,r){super(e,t,n,r)}};Oo.prototype.ValueTypeName="color";var Fo=class extends _n{constructor(e,t,n,r){super(e,t,n,r)}};Fo.prototype.ValueTypeName="number";var Lo=class extends wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let f=c+a;c!==f;c+=4)zn.slerpFlat(s,0,o,c-a,o,c,l);return s}},os=class extends _n{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends _n{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Hr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends _n{constructor(e,t,n,r){super(e,t,n,r)}};No.prototype.ValueTypeName="vector";var ro=new D,so=new zn,Nn=new D,as=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ro,so,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,so,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ro,so,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,so,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new D,mu=new ot,gu=new ot,Ut=class extends as{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,mu,gu),t.subVectors(gu,mu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ls=class extends as{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var _r=-90,vr=1,Uo=class extends Sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ut(_r,vr,e,t);r.layers=this.layers,this.add(r);let s=new Ut(_r,vr,e,t);s.layers=this.layers,this.add(s);let o=new Ut(_r,vr,e,t);o.layers=this.layers,this.add(o);let a=new Ut(_r,vr,e,t);a.layers=this.layers,this.add(a);let l=new Ut(_r,vr,e,t);l.layers=this.layers,this.add(l);let c=new Ut(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Bo=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ql="\\[\\]\\.:\\/",Fh=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",Lh="[^"+Ql.replace("\\.","")+"]",Nh=/((?:WC+[\/:])*)/.source.replace("WC",ec),Uh=/(WCOD+)?/.source.replace("WCOD",Lh),Bh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Vh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),kh=new RegExp("^"+Nh+Uh+Bh+Vh+"$"),zh=["material","materials","bones","map"],Rl=class{constructor(e,t,n){let r=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fh,"")}static parseTrackName(t){let n=kh.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);zh.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let f=n.objectIndex;switch(r){case"materials":if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(f!==void 0){if(t[f]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let a=t[s];if(a===void 0){let f=n.nodeName;Fe("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Rl,i})();St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var Zi=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Il=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};function tc(i,e,t,n){let r=Gh(n);switch(t){case Yl:return i*e;case Xo:return i*e/r.components*r.byteLength;case qo:return i*e/r.components*r.byteLength;case Ii:return i*e*2/r.components*r.byteLength;case Yo:return i*e*2/r.components*r.byteLength;case $l:return i*e*3/r.components*r.byteLength;case bn:return i*e*4/r.components*r.byteLength;case $o:return i*e*4/r.components*r.byteLength;case hs:case fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case Ko:return Math.max(i,16)*Math.max(e,8)/4;case Zo:case jo:return Math.max(i,8)*Math.max(e,8)/2;case Qo:case ea:case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case gs:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case ya:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _s:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gh(i){switch(i){case vn:case Hl:return{byteLength:1,components:1};case wr:case Wl:case Wn:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case Dn:case Go:case Mn:return{byteLength:4,components:1};case Xl:case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Sd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wh(i){let e=new WeakMap;function t(a,l){let c=a.array,f=a.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let f=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,f);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){let _=p[u],b=p[m];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,p[u]=b)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){let b=p[m];i.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:$h,alphatest_fragment:Zh,alphatest_pars_fragment:Jh,aomap_fragment:jh,aomap_pars_fragment:Kh,batching_pars_vertex:Qh,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:hf,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:yf,emissivemap_pars_fragment:Mf,colorspace_fragment:bf,colorspace_pars_fragment:Sf,envmap_fragment:Ef,envmap_common_pars_fragment:wf,envmap_pars_fragment:Cf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Tf,fog_vertex:Pf,fog_pars_vertex:Rf,fog_fragment:If,fog_pars_fragment:Df,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Ff,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Uf,lights_toon_fragment:Vf,lights_toon_pars_fragment:kf,lights_phong_fragment:zf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,lightprobes_pars_fragment:$f,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Kf,map_fragment:Qf,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphinstance_vertex:sp,morphcolor_vertex:op,morphnormal_vertex:ap,morphtarget_pars_vertex:lp,morphtarget_vertex:cp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:hp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:vp,iridescence_pars_fragment:xp,opaque_fragment:yp,packing:Mp,premultiplied_alpha_fragment:bp,project_vertex:Sp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Ip,skinbase_vertex:Dp,skinning_pars_vertex:Op,skinning_vertex:Fp,skinnormal_vertex:Lp,specularmap_fragment:Np,specularmap_pars_fragment:Up,tonemapping_fragment:Bp,tonemapping_pars_fragment:Vp,transmission_fragment:kp,transmission_pars_fragment:zp,uv_pars_fragment:Gp,uv_pars_vertex:Hp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:$p,backgroundCube_frag:Zp,cube_vert:Jp,cube_frag:jp,depth_vert:Kp,depth_frag:Qp,distance_vert:em,distance_frag:tm,equirect_vert:nm,equirect_frag:im,linedashed_vert:rm,linedashed_frag:sm,meshbasic_vert:om,meshbasic_frag:am,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:hm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:_m,meshtoon_vert:vm,meshtoon_frag:xm,points_vert:ym,points_frag:Mm,shadow_vert:bm,shadow_frag:Sm,sprite_vert:Em,sprite_frag:wm},me={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},qn={basic:{uniforms:Jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new We(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Jt([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Jt([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Jt([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Jt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Jt([me.lights,me.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};qn.physical={uniforms:Jt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Aa={r:0,b:0,g:0},Cm=new vt,Ed=new Be;Ed.set(-1,0,0,0,1,0,0,0,1);function Am(i,e,t,n,r,s){let o=new We(0),a=r===!0?0:1,l,c,f=null,p=0,u=null;function m(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let E=M.backgroundBlurriness>0;w=e.get(w,E)}return w}function _(M){let w=!1,E=m(M);E===null?h(o,a):E&&E.isColor&&(h(E,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(M,w){let E=m(w);E&&(E.isCubeTexture||E.mapping===us)?(c===void 0&&(c=new ln(new Sr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ji(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=Je.getTransfer(E.colorSpace)!==rt,(f!==E||p!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,p=E.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ln(new ss(2,2),new gn({name:"BackgroundMaterial",uniforms:ji(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,p=E.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function h(M,w){M.getRGB(Aa,Kl(i)),t.buffers.color.setClear(Aa.r,Aa.g,Aa.b,w,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,h(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,h(o,a)},render:_,addToRenderList:b,dispose:d}}function Tm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(A,B,H,q,O){let z=!1,U=p(A,q,H,B);s!==U&&(s=U,c(s.object)),z=m(A,q,H,O),z&&_(A,q,H,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,E(A,B,H,q),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function f(A){return i.deleteVertexArray(A)}function p(A,B,H,q){let O=q.wireframe===!0,z=n[B.id];z===void 0&&(z={},n[B.id]=z);let U=A.isInstancedMesh===!0?A.id:0,j=z[U];j===void 0&&(j={},z[U]=j);let J=j[H.id];J===void 0&&(J={},j[H.id]=J);let re=J[O];return re===void 0&&(re=u(l()),J[O]=re),re}function u(A){let B=[],H=[],q=[];for(let O=0;O<t;O++)B[O]=0,H[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:q,object:A,attributes:{},index:null}}function m(A,B,H,q){let O=s.attributes,z=B.attributes,U=0,j=H.getAttributes();for(let J in j)if(j[J].location>=0){let ce=O[J],Se=z[J];if(Se===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(Se=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(Se=A.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;U++}return s.attributesNum!==U||s.index!==q}function _(A,B,H,q){let O={},z=B.attributes,U=0,j=H.getAttributes();for(let J in j)if(j[J].location>=0){let ce=z[J];ce===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor));let Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),O[J]=Se,U++}s.attributes=O,s.attributesNum=U,s.index=q}function b(){let A=s.newAttributes;for(let B=0,H=A.length;B<H;B++)A[B]=0}function h(A){d(A,0)}function d(A,B){let H=s.newAttributes,q=s.enabledAttributes,O=s.attributeDivisors;H[A]=1,q[A]===0&&(i.enableVertexAttribArray(A),q[A]=1),O[A]!==B&&(i.vertexAttribDivisor(A,B),O[A]=B)}function M(){let A=s.newAttributes,B=s.enabledAttributes;for(let H=0,q=B.length;H<q;H++)B[H]!==A[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function w(A,B,H,q,O,z,U){U===!0?i.vertexAttribIPointer(A,B,H,O,z):i.vertexAttribPointer(A,B,H,q,O,z)}function E(A,B,H,q){b();let O=q.attributes,z=H.getAttributes(),U=B.defaultAttributeValues;for(let j in z){let J=z[j];if(J.location>=0){let re=O[j];if(re===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),re!==void 0){let ce=re.normalized,Se=re.itemSize,Xe=e.get(re);if(Xe===void 0)continue;let et=Xe.buffer,Ne=Xe.type,Y=Xe.bytesPerElement,fe=Ne===i.INT||Ne===i.UNSIGNED_INT||re.gpuType===Go;if(re.isInterleavedBufferAttribute){let se=re.data,Ae=se.stride,Ee=re.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<J.locationSize;Re++)d(J.location+Re,se.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<J.locationSize;Re++)h(J.location+Re);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Re=0;Re<J.locationSize;Re++)w(J.location+Re,Se/J.locationSize,Ne,ce,Ae*Y,(Ee+Se/J.locationSize*Re)*Y,fe)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<J.locationSize;se++)d(J.location+se,re.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<J.locationSize;se++)h(J.location+se);i.bindBuffer(i.ARRAY_BUFFER,et);for(let se=0;se<J.locationSize;se++)w(J.location+se,Se/J.locationSize,Ne,ce,Se*Y,Se/J.locationSize*se*Y,fe)}}else if(U!==void 0){let ce=U[j];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(J.location,ce);break;case 3:i.vertexAttrib3fv(J.location,ce);break;case 4:i.vertexAttrib4fv(J.location,ce);break;default:i.vertexAttrib1fv(J.location,ce)}}}}M()}function T(){C();for(let A in n){let B=n[A];for(let H in B){let q=B[H];for(let O in q){let z=q[O];for(let U in z)f(z[U].object),delete z[U];delete q[O]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let B=n[A.id];for(let H in B){let q=B[H];for(let O in q){let z=q[O];for(let U in z)f(z[U].object),delete z[U];delete q[O]}}delete n[A.id]}function P(A){for(let B in n){let H=n[B];for(let q in H){let O=H[q];if(O[A.id]===void 0)continue;let z=O[A.id];for(let U in z)f(z[U].object),delete z[U];delete O[A.id]}}}function v(A){for(let B in n){let H=n[B],q=A.isInstancedMesh===!0?A.id:0,O=H[q];if(O!==void 0){for(let z in O){let U=O[z];for(let j in U)f(U[j].object),delete U[j];delete O[z]}delete H[q],Object.keys(H).length===0&&delete n[B]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:h,disableUnusedAttributes:M}}function Pm(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Rm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let v=P===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==vn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!v)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&(Oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:E,maxSamples:T,samples:S}}function Im(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Un,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||r;return r=u,n=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=f(p,u,0)},this.setState=function(p,u,m){let _=p.clippingPlanes,b=p.clipIntersection,h=p.clipShadows,d=i.get(p);if(!r||_===null||_.length===0||s&&!h)s?f(null):c();else{let M=s?0:n,w=M*4,E=d.clippingState||null;l.value=E,E=f(_,u,w,m);for(let T=0;T!==w;++T)E[T]=t[T];d.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,u,m,_){let b=p!==null?p.length:0,h=null;if(b!==0){if(h=l.value,_!==!0||h===null){let d=m+b*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(h===null||h.length<d)&&(h=new Float32Array(d));for(let w=0,E=m;w!==b;++w,E+=4)o.copy(p[w]).applyMatrix4(M,a),o.normal.toArray(h,E),h[E+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,h}}var Di=4,td=[.125,.215,.35,.446,.526,.582],Ki=20,Dm=256,xs=new ls,nd=new We,nc=null,ic=0,rc=0,sc=!1,Om=new D,Pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Om}=s;nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,rc),this._renderer.xr.enabled=sc,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Wn,format:bn,colorSpace:Wr,depthBuffer:!1},r=id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fm(s)),this._blurMaterial=Nm(s,e,t),this._ggxMaterial=Lm(s,e,t)}return r}_compileMaterial(e){let t=new ln(new Zt,e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,r,s){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(nd),p.toneMapping=In,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new Sr,new ri({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,h=b.material,d=!1,M=e.background;M?M.isColor&&(h.color.copy(M),e.background=null,d=!0):(h.color.copy(nd),d=!0);for(let w=0;w<6;w++){let E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[w],s.y,s.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[w]));let T=this._cubeSize;Ar(r,E*T,w>2?T:0,T,T),p.setRenderTarget(r),d&&p.render(b,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ti||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,m=p*u,{_lodMax:_}=this,b=this._sizeLods[n],h=3*b*(n>_-Di?n-_+Di:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Ar(s,h,d,3*b,2*b),r.setRenderTarget(s),r.render(a,xs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ar(e,h,d,3*b,2*b),r.setRenderTarget(e),r.render(a,xs)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[r];p.material=c;let u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),b=s/_,h=isFinite(s)?1+Math.floor(f*b):Ki;h>Ki&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ki}`);let d=[],M=0;for(let P=0;P<Ki;++P){let v=P/b,C=Math.exp(-v*v/2);d.push(C),P===0?M+=C:P<h&&(M+=2*C)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=_,u.mipInt.value=w-n;let E=this._sizeLods[r],T=3*E*(r>w-Di?r-w+Di:0),S=4*(this._cubeSize-E);Ar(t,T,S,3*E,2*E),l.setRenderTarget(t),l.render(p,xs)}};function Fm(i){let e=[],t=[],n=[],r=i,s=i-Di+1+td.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Di?l=td[o-i+Di-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,b=3,h=2,d=1,M=new Float32Array(b*_*m),w=new Float32Array(h*_*m),E=new Float32Array(d*_*m);for(let S=0;S<m;S++){let P=S%3*2/3-1,v=S>2?0:-1,C=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(C,b*_*S),w.set(u,h*_*S);let L=[S,S,S,S,S,S];E.set(L,d*_*S)}let T=new Zt;T.setAttribute("position",new on(M,b)),T.setAttribute("uv",new on(w,h)),T.setAttribute("faceIndex",new on(E,d)),n.push(new ln(T,null)),r>Di&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function id(i,e,t){let n=new mn(i,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Lm(i,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Nm(i,e,t){let n=new Float32Array(Ki),r=new D(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function rd(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function sd(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ra=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new is(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Sr(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Hn});s.uniforms.tEquirect.value=t;let o=new ln(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Gt),new Uo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function Um(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){let m=u.mapping;if(m===Vo||m===ko)if(e.has(u)){let _=e.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new Ra(_.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let m=u.mapping,_=m===Vo||m===ko,b=m===Ti||m===Ji;if(_||b){let h=t.get(u),d=h!==void 0?h.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Pa(i)),h=_?n.fromEquirectangular(u,h):n.fromCubemap(u,h),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),h.texture;if(h!==void 0)return h.texture;{let M=u.image;return _&&M&&M.height>0||b&&M&&l(M)?(n===null&&(n=new Pa(i)),h=_?n.fromEquirectangular(u):n.fromCubemap(u),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),u.addEventListener("dispose",f),h.texture):null}}}return u}function a(u,m){return m===Vo?u.mapping=Ti:m===ko&&(u.mapping=Ji),u}function l(u){let m=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(u){let m=u.target;m.removeEventListener("dispose",f);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Bm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&yo("WebGLRenderer: "+n+" extension not supported."),r}}}function Vm(i,e,t,n){let r={},s=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];let m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,_=p.attributes.position,b=0;if(_===void 0)return;if(m!==null){let M=m.array;b=m.version;for(let w=0,E=M.length;w<E;w+=3){let T=M[w+0],S=M[w+1],P=M[w+2];u.push(T,S,S,P,P,T)}}else{let M=_.array;b=_.version;for(let w=0,E=M.length/3-1;w<E;w+=3){let T=w+0,S=w+1,P=w+2;u.push(T,S,S,P,P,T)}}let h=new(_.count>=65535?Kr:jr)(u,1);h.version=b;let d=s.get(p);d&&e.remove(d),s.set(p,h)}function f(p){let u=s.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function km(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,u){i.drawElements(n,u,s,p*o),t.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,p*o,m),t.update(u,n,m))}function f(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,m);let b=0;for(let h=0;h<m;h++)b+=u[h];t.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gm(i,e,t){let n=new WeakMap,r=new Et;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==p){let L=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",L)};var m=L;u!==void 0&&u.texture.dispose();let _=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],E=0;_===!0&&(E=1),b===!0&&(E=2),h===!0&&(E=3);let T=a.attributes.position.count*E,S=1;T>e.maxTextureSize&&(S=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let P=new Float32Array(T*S*4*p),v=new $r(P,T,S,p);v.type=Mn,v.needsUpdate=!0;let C=E*4;for(let A=0;A<p;A++){let B=d[A],H=M[A],q=w[A],O=T*S*4*A;for(let z=0;z<B.count;z++){let U=z*C;_===!0&&(r.fromBufferAttribute(B,z),P[O+U+0]=r.x,P[O+U+1]=r.y,P[O+U+2]=r.z,P[O+U+3]=0),b===!0&&(r.fromBufferAttribute(H,z),P[O+U+4]=r.x,P[O+U+5]=r.y,P[O+U+6]=r.z,P[O+U+7]=0),h===!0&&(r.fromBufferAttribute(q,z),P[O+U+8]=r.x,P[O+U+9]=r.y,P[O+U+10]=r.z,P[O+U+11]=q.itemSize===4?r.w:1)}}u={count:p,texture:v,size:new ot(T,S)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let h=0;h<c.length;h++)_+=c[h];let b=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Hm(i,e,t,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function a(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var Wm={[Nl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function Xm(i,e,t,n,r){let s=new mn(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new si(e,t):void 0}),o=new mn(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),a=new Zt;a.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let l=new Co({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ln(a,l),f=new ls(-1,1,1,-1,0,1),p=null,u=null,m=!1,_,b=null,h=[],d=!1;this.setSize=function(M,w){s.setSize(M,w),o.setSize(M,w);for(let E=0;E<h.length;E++){let T=h[E];T.setSize&&T.setSize(M,w)}},this.setEffects=function(M){h=M,d=h.length>0&&h[0].isRenderPass===!0;let w=s.width,E=s.height;for(let T=0;T<h.length;T++){let S=h[T];S.setSize&&S.setSize(w,E)}},this.begin=function(M,w){if(m||M.toneMapping===In&&h.length===0)return!1;if(b=w,w!==null){let E=w.width,T=w.height;(s.width!==E||s.height!==T)&&this.setSize(E,T)}return d===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=In,!0},this.hasRenderPass=function(){return d},this.end=function(M,w){M.toneMapping=_,m=!0;let E=s,T=o;for(let S=0;S<h.length;S++){let P=h[S];if(P.enabled!==!1&&(P.render(M,T,E,w),P.needsSwap!==!1)){let v=E;E=T,T=v}}if(p!==M.outputColorSpace||u!==M.toneMapping){p=M.outputColorSpace,u=M.toneMapping,l.defines={},Je.getTransfer(p)===rt&&(l.defines.SRGB_TRANSFER="");let S=Wm[u];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(b),M.render(c,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var wd=new ai,lc=new si(1,1),Cd=new $r,Ad=new Eo,Td=new is,od=[],ad=[],ld=new Float32Array(16),cd=new Float32Array(9),ud=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=od[r];if(s===void 0&&(s=new Float32Array(r),od[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ft(t,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),Lt(t,n)}}function jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ft(t,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),Lt(t,n)}}function Km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ft(t,n))return;ld.set(n),i.uniformMatrix4fv(this.addr,!1,ld),Lt(t,n)}}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function ag(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?Ca:wa,s=lc):s=wd,t.setTexture2D(e||s,r)}function lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ad,r)}function cg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Td,r)}function ug(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cd,r)}function dg(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return $m;case 35666:return Zm;case 35674:return Jm;case 35675:return jm;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}function hg(i,e){i.uniform1fv(this.addr,e)}function fg(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vg(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xg(i,e){i.uniform1iv(this.addr,e)}function yg(i,e){i.uniform2iv(this.addr,e)}function Mg(i,e){i.uniform3iv(this.addr,e)}function bg(i,e){i.uniform4iv(this.addr,e)}function Sg(i,e){i.uniform1uiv(this.addr,e)}function Eg(i,e){i.uniform2uiv(this.addr,e)}function wg(i,e){i.uniform3uiv(this.addr,e)}function Cg(i,e){i.uniform4uiv(this.addr,e)}function Ag(i,e,t){let n=this.cache,r=e.length,s=Da(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=lc:o=wd;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Tg(i,e,t){let n=this.cache,r=e.length,s=Da(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ad,s[o])}function Pg(i,e,t){let n=this.cache,r=e.length,s=Da(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Td,s[o])}function Rg(i,e,t){let n=this.cache,r=e.length,s=Da(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Cd,s[o])}function Ig(i){switch(i){case 5126:return hg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Eg;case 36295:return wg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Rg}}var cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}},uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},oc=/(\w+)(\])?(\[|\.)?/g;function dd(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){let n=i.name,r=n.length;for(oc.lastIndex=0;;){let s=oc.exec(n),o=oc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(t,c===void 0?new cc(a,i,e):new uc(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new dc(a),dd(t,p)),t=p}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Dg(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function hd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Og=37297,Fg=0;function Lg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var fd=new Be;function Ng(i){Je._getMatrix(fd,Je.workingColorSpace,i);let e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(e),a)}else return s}function Ug(i,e){let t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Bg={[Nl]:"Linear",[Ul]:"Reinhard",[Bl]:"Cineon",[Vl]:"ACESFilmic",[zl]:"AgX",[Gl]:"Neutral",[kl]:"Custom"};function Vg(i,e){let t=Bg[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ta=new D;function kg(){Je.getLuminanceCoefficients(Ta);let i=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Gg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ms(i){return i!==""}function md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(Wg,qg)}var Xg=new Map;function qg(i,e){let t=qe[e];if(t===void 0){let n=Xg.get(e);if(n!==void 0)t=qe[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(i){return i.replace(Yg,$g)}function $g(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Zg={[cs]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Jg(i){return Zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jg={[Ti]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE_UV"};function Kg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qg={[Ji]:"ENVMAP_MODE_REFRACTION"};function e0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t0={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function n0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":t0[i.combine]||"ENVMAP_BLENDING_NONE"}function i0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function r0(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jg(t),c=Kg(t),f=e0(t),p=n0(t),u=i0(t),m=zg(t),_=Gg(s),b=r.createProgram(),h,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ms).join(`
`),h.length>0&&(h+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ms).join(`
`),d.length>0&&(d+=`
`)):(h=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),d=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?qe.tonemapping_pars_fragment:"",t.toneMapping!==In?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),o=hc(o),o=md(o,t),o=gd(o,t),a=hc(a),a=md(a,t),a=gd(a,t),o=_d(o),a=_d(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,d=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=M+h+o,E=M+d+a,T=hd(r,r.VERTEX_SHADER,w),S=hd(r,r.FRAGMENT_SHADER,E);r.attachShader(b,T),r.attachShader(b,S),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function P(A){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(b)||"",H=r.getShaderInfoLog(T)||"",q=r.getShaderInfoLog(S)||"",O=B.trim(),z=H.trim(),U=q.trim(),j=!0,J=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,T,S);else{let re=pd(r,T,"vertex"),ce=pd(r,S,"fragment");Fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+re+`
`+ce)}else O!==""?Oe("WebGLProgram: Program Info Log:",O):(z===""||U==="")&&(J=!1);J&&(A.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:h},fragmentShader:{log:U,prefix:d}})}r.deleteShader(T),r.deleteShader(S),v=new Tr(r,b),C=Hg(r,b)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(b,Og)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=S,this}var s0=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pc(e),t.set(e,n)),n}},pc=class{constructor(e){this.id=s0++,this.code=e,this.usedTimes=0}};function o0(i){return i===Ii||i===gs||i===_s}function a0(i,e,t,n,r,s){let o=new Jr,a=new fc,l=new Set,c=[],f=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,C,L,A,B,H){let q=A.fog,O=B.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||z,U),J=j&&j.mapping===us?j.image.height:null,re=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=ce!==void 0?ce.length:0,Xe=0;O.morphAttributes.position!==void 0&&(Xe=1),O.morphAttributes.normal!==void 0&&(Xe=2),O.morphAttributes.color!==void 0&&(Xe=3);let et,Ne,Y,fe;if(re){let ze=qn[re];et=ze.vertexShader,Ne=ze.fragmentShader}else et=v.vertexShader,Ne=v.fragmentShader,a.update(v),Y=a.getVertexShaderID(v),fe=a.getFragmentShaderID(v);let se=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ee=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,Ve=!!v.map,ke=!!v.matcap,Qe=!!j,ct=!!v.aoMap,Ye=!!v.lightMap,xt=!!v.bumpMap,ht=!!v.normalMap,cn=!!v.displacementMap,I=!!v.emissiveMap,It=!!v.metalnessMap,Ze=!!v.roughnessMap,ft=v.anisotropy>0,pe=v.clearcoat>0,yt=v.dispersion>0,y=v.iridescence>0,g=v.sheen>0,N=v.transmission>0,$=ft&&!!v.anisotropyMap,ee=pe&&!!v.clearcoatMap,oe=pe&&!!v.clearcoatNormalMap,he=pe&&!!v.clearcoatRoughnessMap,W=y&&!!v.iridescenceMap,Z=y&&!!v.iridescenceThicknessMap,ve=g&&!!v.sheenColorMap,Me=g&&!!v.sheenRoughnessMap,ue=!!v.specularMap,ae=!!v.specularColorMap,Ue=!!v.specularIntensityMap,He=N&&!!v.transmissionMap,nt=N&&!!v.thicknessMap,R=!!v.gradientMap,le=!!v.alphaMap,X=v.alphaTest>0,xe=!!v.alphaHash,de=!!v.extensions,Q=In;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Q=i.toneMapping);let Te={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:et,fragmentShader:Ne,defines:v.defines,customVertexShaderID:Y,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&B.instanceColor!==null,instancingMorph:Ee&&B.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:ke,envMap:Qe,envMapMode:Qe&&j.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:Ye,bumpMap:xt,normalMap:ht,displacementMap:cn,emissiveMap:I,normalMapObjectSpace:ht&&v.normalMapType===Gu,normalMapTangentSpace:ht&&v.normalMapType===Zl,packedNormalMap:ht&&v.normalMapType===Zl&&o0(v.normalMap.format),metalnessMap:It,roughnessMap:Ze,anisotropy:ft,anisotropyMap:$,clearcoat:pe,clearcoatMap:ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,dispersion:yt,iridescence:y,iridescenceMap:W,iridescenceThicknessMap:Z,sheen:g,sheenColorMap:ve,sheenRoughnessMap:Me,specularMap:ue,specularColorMap:ae,specularIntensityMap:Ue,transmission:N,transmissionMap:He,thicknessMap:nt,gradientMap:R,opaque:v.transparent===!1&&v.blending===tn&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:X,alphaHash:xe,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:ct&&_(v.aoMap.channel),lightMapUv:Ye&&_(v.lightMap.channel),bumpMapUv:xt&&_(v.bumpMap.channel),normalMapUv:ht&&_(v.normalMap.channel),displacementMapUv:cn&&_(v.displacementMap.channel),emissiveMapUv:I&&_(v.emissiveMap.channel),metalnessMapUv:It&&_(v.metalnessMap.channel),roughnessMapUv:Ze&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:ee&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(v.sheenRoughnessMap.channel),specularMapUv:ue&&_(v.specularMap.channel),specularColorMapUv:ae&&_(v.specularColorMap.channel),specularIntensityMapUv:Ue&&_(v.specularIntensityMap.channel),transmissionMapUv:He&&_(v.transmissionMap.channel),thicknessMapUv:nt&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ht||ft),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Ve||le),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===rt,decodeVideoTextureEmissive:I&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:de&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function h(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)C.push(L),C.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(C,v),M(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function d(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function M(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function w(v){let C=m[v.type],L;if(C){let A=qn[C];L=ed.clone(A.uniforms)}else L=v.uniforms;return L}function E(v,C){let L=f.get(C);return L!==void 0?++L.usedTimes:(L=new r0(i,C,v,r),c.push(L),f.set(C,L)),L}function T(v){if(--v.usedTimes===0){let C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function P(){a.dispose()}return{getParameters:b,getProgramCacheKey:h,getUniforms:w,acquireProgram:E,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:P}}function l0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function c0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yd(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,_,b,h,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:h,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=o(u),M.groupOrder=b,M.renderOrder=u.renderOrder,M.z=h,M.group=d),e++,M}function l(u,m,_,b,h,d){let M=a(u,m,_,b,h,d);_.transmission>0?n.push(M):_.transparent===!0?r.push(M):t.push(M)}function c(u,m,_,b,h,d){let M=a(u,m,_,b,h,d);_.transmission>0?n.unshift(M):_.transparent===!0?r.unshift(M):t.unshift(M)}function f(u,m){t.length>1&&t.sort(u||c0),n.length>1&&n.sort(m||xd),r.length>1&&r.sort(m||xd)}function p(){for(let u=e,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function u0(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new yd,i.set(n,[o])):r>=s.length?(o=new yd,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function d0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function h0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var f0=0;function p0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m0(i){let e=new d0,t=h0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new vt,o=new vt;function a(c){let f=0,p=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let m=0,_=0,b=0,h=0,d=0,M=0,w=0,E=0,T=0,S=0,P=0;c.sort(p0);for(let C=0,L=c.length;C<L;C++){let A=c[C],B=A.color,H=A.intensity,q=A.distance,O=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ii?O=A.shadow.map.texture:O=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=B.r*H,p+=B.g*H,u+=B.b*H;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],H);P++}else if(A.isDirectionalLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let U=A.shadow,j=t.get(A);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=A.shadow.matrix,M++}n.directional[m]=z,m++}else if(A.isSpotLight){let z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(B).multiplyScalar(H),z.distance=q,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[b]=z;let U=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,U.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[b]=U.matrix,A.castShadow){let j=t.get(A);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=O,E++}b++}else if(A.isRectAreaLight){let z=e.get(A);z.color.copy(B).multiplyScalar(H),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[h]=z,h++}else if(A.isPointLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){let U=A.shadow,j=t.get(A);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=A.shadow.matrix,w++}n.point[_]=z,_++}else if(A.isHemisphereLight){let z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(H),z.groundColor.copy(A.groundColor).multiplyScalar(H),n.hemi[d]=z,d++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==b||v.rectAreaLength!==h||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==w||v.numSpotShadows!==E||v.numSpotMaps!==T||v.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=h,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=P,v.directionalLength=m,v.pointLength=_,v.spotLength=b,v.rectAreaLength=h,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=w,v.numSpotShadows=E,v.numSpotMaps=T,v.numLightProbes=P,n.version=f0++)}function l(c,f){let p=0,u=0,m=0,_=0,b=0,h=f.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let w=c[d];if(w.isDirectionalLight){let E=n.directional[p];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),p++}else if(w.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),m++}else if(w.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(h),o.identity(),s.copy(w.matrixWorld),s.premultiply(h),o.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(h),u++}else if(w.isHemisphereLight){let E=n.hemi[b];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(h),b++}}}return{setup:a,setupView:l,state:n}}function Md(i){let e=new m0(i),t=[],n=[],r=[];function s(u){p.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function g0(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Md(i),e.set(r,[a])):s>=o.length?(a=new Md(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,x0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],y0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],bd=new vt,ys=new D,ac=new D;function M0(i,e,t){let n=new ns,r=new ot,s=new ot,o=new Et,a=new Ao,l=new To,c={},f=t.maxTextureSize,p={[ni]:nn,[nn]:ni,[Gn]:Gn},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:_0,fragmentShader:v0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new Zt;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ln(_,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let d=this.type;this.render=function(S,P,v){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;this.type===xu&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cs);let C=i.getRenderTarget(),L=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Hn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=d!==this.type;H&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=S.length;q<O;q++){let z=S[q],U=z.shadow;if(U===void 0){Oe("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let j=U.getFrameExtents();r.multiply(j),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,U.mapSize.y=s.y));let J=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=J,U.map===null||H===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Er){if(z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new mn(r.x,r.y,{format:Ii,type:Wn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new si(r.x,r.y,Mn),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=Vn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt}else z.isPointLight?(U.map=new Ra(r.x),U.map.depthTexture=new wo(r.x,Dn)):(U.map=new mn(r.x,r.y),U.map.depthTexture=new si(r.x,r.y,Dn)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=Vn,this.type===cs?(U.map.depthTexture.compareFunction=J?Ca:wa,U.map.depthTexture.minFilter=Gt,U.map.depthTexture.magFilter=Gt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt);U.camera.updateProjectionMatrix()}let re=U.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<re;ce++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(U.map),i.clear());let Se=U.getViewport(ce);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o)}if(z.isPointLight){let Se=U.camera,Xe=U.matrix,et=z.distance||Se.far;et!==Se.far&&(Se.far=et,Se.updateProjectionMatrix()),ys.setFromMatrixPosition(z.matrixWorld),Se.position.copy(ys),ac.copy(Se.position),ac.add(x0[ce]),Se.up.copy(y0[ce]),Se.lookAt(ac),Se.updateMatrixWorld(),Xe.makeTranslation(-ys.x,-ys.y,-ys.z),bd.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),U._frustum.setFromProjectionMatrix(bd,Se.coordinateSystem,Se.reversedDepth)}else U.updateMatrices(z);n=U.getFrustum(),E(P,v,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===Er&&M(U,v),U.needsUpdate=!1}d=this.type,h.needsUpdate=!1,i.setRenderTarget(C,L,A)};function M(S,P){let v=e.update(b);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mn(r.x,r.y,{format:Ii,type:Wn})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(P,null,v,u,b,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(P,null,v,m,b,null)}function w(S,P,v,C){let L=null,A=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)L=A;else if(L=v.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=L.uuid,H=P.uuid,q=c[B];q===void 0&&(q={},c[B]=q);let O=q[H];O===void 0&&(O=L.clone(),q[H]=O,P.addEventListener("dispose",T)),L=O}if(L.visible=P.visible,L.wireframe=P.wireframe,C===Er?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:p[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let B=i.properties.get(L);B.light=v}return L}function E(S,P,v,C,L){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Er)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let H=e.update(S),q=S.material;if(Array.isArray(q)){let O=H.groups;for(let z=0,U=O.length;z<U;z++){let j=O[z],J=q[j.materialIndex];if(J&&J.visible){let re=w(S,J,C,L);S.onBeforeShadow(i,S,P,v,H,re,j),i.renderBufferDirect(v,null,H,re,S,j),S.onAfterShadow(i,S,P,v,H,re,j)}}}else if(q.visible){let O=w(S,q,C,L);S.onBeforeShadow(i,S,P,v,H,O,null),i.renderBufferDirect(v,null,H,O,S,null),S.onAfterShadow(i,S,P,v,H,O,null)}}let B=S.children;for(let H=0,q=B.length;H<q;H++)E(B[H],P,v,C,L)}function T(S){S.target.removeEventListener("dispose",T);for(let v in c){let C=c[v],L=S.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function b0(i,e){function t(){let R=!1,le=new Et,X=null,xe=new Et(0,0,0,0);return{setMask:function(de){X!==de&&!R&&(i.colorMask(de,de,de,de),X=de)},setLocked:function(de){R=de},setClear:function(de,Q,Te,ze,wt){wt===!0&&(de*=ze,Q*=ze,Te*=ze),le.set(de,Q,Te,ze),xe.equals(le)===!1&&(i.clearColor(de,Q,Te,ze),xe.copy(le))},reset:function(){R=!1,X=null,xe.set(-1,0,0,0)}}}function n(){let R=!1,le=!1,X=null,xe=null,de=null;return{setReversed:function(Q){if(le!==Q){let Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=Q;let ze=de;de=null,this.setClear(ze)}},getReversed:function(){return le},setTest:function(Q){Q?se(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Q){X!==Q&&!R&&(i.depthMask(Q),X=Q)},setFunc:function(Q){if(le&&(Q=Ku[Q]),xe!==Q){switch(Q){case co:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Q}},setLocked:function(Q){R=Q},setClear:function(Q){de!==Q&&(de=Q,le&&(Q=1-Q),i.clearDepth(Q))},reset:function(){R=!1,X=null,xe=null,de=null,le=!1}}}function r(){let R=!1,le=null,X=null,xe=null,de=null,Q=null,Te=null,ze=null,wt=null;return{setTest:function(at){R||(at?se(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(at){le!==at&&!R&&(i.stencilMask(at),le=at)},setFunc:function(at,Yn,On){(X!==at||xe!==Yn||de!==On)&&(i.stencilFunc(at,Yn,On),X=at,xe=Yn,de=On)},setOp:function(at,Yn,On){(Q!==at||Te!==Yn||ze!==On)&&(i.stencilOp(at,Yn,On),Q=at,Te=Yn,ze=On)},setLocked:function(at){R=at},setClear:function(at){wt!==at&&(i.clearStencil(at),wt=at)},reset:function(){R=!1,le=null,X=null,xe=null,de=null,Q=null,Te=null,ze=null,wt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,f={},p={},u={},m=new WeakMap,_=[],b=null,h=!1,d=null,M=null,w=null,E=null,T=null,S=null,P=null,v=new We(0,0,0),C=0,L=!1,A=null,B=null,H=null,q=null,O=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,j=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),U=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),U=j>=2);let re=null,ce={},Se=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),et=new Et().fromArray(Se),Ne=new Et().fromArray(Xe);function Y(R,le,X,xe){let de=new Uint8Array(4),Q=i.createTexture();i.bindTexture(R,Q),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<X;Te++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(le+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Q}let fe={};fe[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Hi),xt(!1),ht(Dl),se(i.CULL_FACE),ct(Hn);function se(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function Ae(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Ee(R,le){return u[R]!==le?(i.bindFramebuffer(R,le),u[R]=le,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Re(R,le){let X=_,xe=!1;if(R){X=m.get(le),X===void 0&&(X=[],m.set(le,X));let de=R.textures;if(X.length!==de.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Te=de.length;Q<Te;Q++)X[Q]=i.COLOR_ATTACHMENT0+Q;X.length=de.length,xe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,xe=!0);xe&&i.drawBuffers(X)}function Ve(R){return b!==R?(i.useProgram(R),b=R,!0):!1}let ke={[bi]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};ke[Su]=i.MIN,ke[Eu]=i.MAX;let Qe={[wu]:i.ZERO,[Cu]:i.ONE,[Au]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(R,le,X,xe,de,Q,Te,ze,wt,at){if(R===Hn){h===!0&&(Ae(i.BLEND),h=!1);return}if(h===!1&&(se(i.BLEND),h=!0),R!==yu){if(R!==d||at!==L){if((M!==bi||T!==bi)&&(i.blendEquation(i.FUNC_ADD),M=bi,T=bi),at)switch(R){case tn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",R);break}else switch(R){case tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",R);break}w=null,E=null,S=null,P=null,v.set(0,0,0),C=0,d=R,L=at}return}de=de||le,Q=Q||X,Te=Te||xe,(le!==M||de!==T)&&(i.blendEquationSeparate(ke[le],ke[de]),M=le,T=de),(X!==w||xe!==E||Q!==S||Te!==P)&&(i.blendFuncSeparate(Qe[X],Qe[xe],Qe[Q],Qe[Te]),w=X,E=xe,S=Q,P=Te),(ze.equals(v)===!1||wt!==C)&&(i.blendColor(ze.r,ze.g,ze.b,wt),v.copy(ze),C=wt),d=R,L=!1}function Ye(R,le){R.side===Gn?Ae(i.CULL_FACE):se(i.CULL_FACE);let X=R.side===nn;le&&(X=!X),xt(X),R.blending===tn&&R.transparent===!1?ct(Hn):ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let xe=R.stencilWrite;a.setTest(xe),xe&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),I(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(R){A!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),A=R)}function ht(R){R!==_u?(se(i.CULL_FACE),R!==B&&(R===Dl?i.cullFace(i.BACK):R===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),B=R}function cn(R){R!==H&&(U&&i.lineWidth(R),H=R)}function I(R,le,X){R?(se(i.POLYGON_OFFSET_FILL),(q!==le||O!==X)&&(q=le,O=X,o.getReversed()&&(le=-le),i.polygonOffset(le,X))):Ae(i.POLYGON_OFFSET_FILL)}function It(R){R?se(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function Ze(R){R===void 0&&(R=i.TEXTURE0+z-1),re!==R&&(i.activeTexture(R),re=R)}function ft(R,le,X){X===void 0&&(re===null?X=i.TEXTURE0+z-1:X=re);let xe=ce[X];xe===void 0&&(xe={type:void 0,texture:void 0},ce[X]=xe),(xe.type!==R||xe.texture!==le)&&(re!==X&&(i.activeTexture(X),re=X),i.bindTexture(R,le||fe[R]),xe.type=R,xe.texture=le)}function pe(){let R=ce[re];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function yt(){try{i.compressedTexImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function g(){try{i.texSubImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function N(){try{i.texSubImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function oe(){try{i.texStorage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function he(){try{i.texStorage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function W(){try{i.texImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function Z(){try{i.texImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ve(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function Me(R,le){p[R]!==le&&(i.pixelStorei(R,le),p[R]=le)}function ue(R){et.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),et.copy(R))}function ae(R){Ne.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ne.copy(R))}function Ue(R,le){let X=c.get(le);X===void 0&&(X=new WeakMap,c.set(le,X));let xe=X.get(R);xe===void 0&&(xe=i.getUniformBlockIndex(le,R.name),X.set(R,xe))}function He(R,le){let xe=c.get(le).get(R);l.get(le)!==xe&&(i.uniformBlockBinding(le,xe,R.__bindingPointIndex),l.set(le,xe))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},re=null,ce={},u={},m=new WeakMap,_=[],b=null,h=!1,d=null,M=null,w=null,E=null,T=null,S=null,P=null,v=new We(0,0,0),C=0,L=!1,A=null,B=null,H=null,q=null,O=null,et.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Ae,bindFramebuffer:Ee,drawBuffers:Re,useProgram:Ve,setBlending:ct,setMaterial:Ye,setFlipSided:xt,setCullFace:ht,setLineWidth:cn,setPolygonOffset:I,setScissorTest:It,activeTexture:Ze,bindTexture:ft,unbindTexture:pe,compressedTexImage2D:yt,compressedTexImage3D:y,texImage2D:W,texImage3D:Z,pixelStorei:Me,getParameter:ve,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:oe,texStorage3D:he,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:ue,viewport:ae,reset:nt}}function S0(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,f=new WeakMap,p=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,g){return _?new OffscreenCanvas(y,g):Yr("canvas")}function h(y,g,N){let $=1,ee=yt(y);if((ee.width>N||ee.height>N)&&($=N/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let oe=Math.floor($*ee.width),he=Math.floor($*ee.height);u===void 0&&(u=b(oe,he));let W=g?b(oe,he):u;return W.width=oe,W.height=he,W.getContext("2d").drawImage(y,0,0,oe,he),Oe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+he+")."),W}else return"data"in y&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),y;return y}function d(y){return y.generateMipmaps}function M(y){i.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(y,g,N,$,ee,oe=!1){if(y!==null){if(i[y]!==void 0)return i[y];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let he;$&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=g;if(g===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8),N===i.UNSIGNED_SHORT&&he&&(W=he.R16_EXT),N===i.SHORT&&he&&(W=he.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),g===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8),N===i.UNSIGNED_SHORT&&he&&(W=he.RG16_EXT),N===i.SHORT&&he&&(W=he.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&he&&(W=he.RGB16_EXT),N===i.SHORT&&he&&(W=he.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){let Z=oe?Xr:Je.getTransfer(ee);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Z===rt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&he&&(W=he.RGBA16_EXT),N===i.SHORT&&he&&(W=he.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function T(y,g){let N;return y?g===null||g===Dn||g===Cr?N=i.DEPTH24_STENCIL8:g===Mn?N=i.DEPTH32F_STENCIL8:g===wr&&(N=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Dn||g===Cr?N=i.DEPTH_COMPONENT24:g===Mn?N=i.DEPTH_COMPONENT32F:g===wr&&(N=i.DEPTH_COMPONENT16),N}function S(y,g){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function P(y){let g=y.target;g.removeEventListener("dispose",P),C(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&p.delete(g)}function v(y){let g=y.target;g.removeEventListener("dispose",v),A(g)}function C(y){let g=n.get(y);if(g.__webglInit===void 0)return;let N=y.source,$=m.get(N);if($){let ee=$[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(y),Object.keys($).length===0&&m.delete(N)}n.remove(y)}function L(y){let g=n.get(y);i.deleteTexture(g.__webglTexture);let N=y.source,$=m.get(N);delete $[g.__cacheKey],o.memory.textures--}function A(y){let g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let ee=0;ee<g.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(g.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=y.textures;for(let $=0,ee=N.length;$<ee;$++){let oe=n.get(N[$]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(N[$])}n.remove(y)}let B=0;function H(){B=0}function q(){return B}function O(y){B=y}function z(){let y=B;return y>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),B+=1,y}function U(y){let g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function j(y,g){let N=n.get(y);if(y.isVideoTexture&&ft(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){let $=y.image;if($===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(N,y,g);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function J(y,g){let N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){Ae(N,y,g);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function re(y,g){let N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){Ae(N,y,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function ce(y,g){let N=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){Ee(N,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let Se={[_o]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},Xe={[Bt]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},et={[Hu]:i.NEVER,[$u]:i.ALWAYS,[Wu]:i.LESS,[wa]:i.LEQUAL,[Xu]:i.EQUAL,[Ca]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function Ne(y,g){if(g.type===Mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===zo||g.magFilter===ds||g.magFilter===Pi||g.minFilter===Gt||g.minFilter===zo||g.minFilter===ds||g.minFilter===Pi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Se[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Se[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Se[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Xe[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==ds&&g.minFilter!==Pi||g.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Y(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",P));let $=g.source,ee=m.get($);ee===void 0&&(ee={},m.set($,ee));let oe=U(g);if(oe!==y.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[oe].usedTimes++;let he=ee[y.__cacheKey];he!==void 0&&(ee[y.__cacheKey].usedTimes--,he.usedTimes===0&&L(g)),y.__cacheKey=oe,y.__webglTexture=ee[oe].texture}return N}function fe(y,g,N){return Math.floor(Math.floor(y/N)/g)}function se(y,g,N,$){let oe=y.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,$,g.data);else{oe.sort((Me,ue)=>Me.start-ue.start);let he=0;for(let Me=1;Me<oe.length;Me++){let ue=oe[he],ae=oe[Me],Ue=ue.start+ue.count,He=fe(ae.start,g.width,4),nt=fe(ue.start,g.width,4);ae.start<=Ue+1&&He===nt&&fe(ae.start+ae.count-1,g.width,4)===He?ue.count=Math.max(ue.count,ae.start+ae.count-ue.start):(++he,oe[he]=ae)}oe.length=he+1;let W=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Me=0,ue=oe.length;Me<ue;Me++){let ae=oe[Me],Ue=Math.floor(ae.start/4),He=Math.ceil(ae.count/4),nt=Ue%g.width,R=Math.floor(Ue/g.width),le=He,X=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,nt,R,le,X,N,$,g.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function Ae(y,g,N){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);let ee=Y(y,g),oe=g.source;t.bindTexture($,y.__webglTexture,i.TEXTURE0+N);let he=n.get(oe);if(oe.version!==he.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let X=Je.getPrimaries(Je.workingColorSpace),xe=g.colorSpace===oi?null:Je.getPrimaries(g.colorSpace),de=g.colorSpace===oi||X===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=h(g.image,!1,r.maxTextureSize);Z=pe(g,Z);let ve=s.convert(g.format,g.colorSpace),Me=s.convert(g.type),ue=E(g.internalFormat,ve,Me,g.normalized,g.colorSpace,g.isVideoTexture);Ne($,g);let ae,Ue=g.mipmaps,He=g.isVideoTexture!==!0,nt=he.__version===void 0||ee===!0,R=oe.dataReady,le=S(g,Z);if(g.isDepthTexture)ue=T(g.format===Ri,g.type),nt&&(He?t.texStorage2D(i.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ue,Z.width,Z.height,0,ve,Me,null));else if(g.isDataTexture)if(Ue.length>0){He&&nt&&t.texStorage2D(i.TEXTURE_2D,le,ue,Ue[0].width,Ue[0].height);for(let X=0,xe=Ue.length;X<xe;X++)ae=Ue[X],He?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ae.width,ae.height,ve,Me,ae.data):t.texImage2D(i.TEXTURE_2D,X,ue,ae.width,ae.height,0,ve,Me,ae.data);g.generateMipmaps=!1}else He?(nt&&t.texStorage2D(i.TEXTURE_2D,le,ue,Z.width,Z.height),R&&se(g,Z,ve,Me)):t.texImage2D(i.TEXTURE_2D,0,ue,Z.width,Z.height,0,ve,Me,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){He&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Ue[0].width,Ue[0].height,Z.depth);for(let X=0,xe=Ue.length;X<xe;X++)if(ae=Ue[X],g.format!==bn)if(ve!==null)if(He){if(R)if(g.layerUpdates.size>0){let de=tc(ae.width,ae.height,g.format,g.type);for(let Q of g.layerUpdates){let Te=ae.data.subarray(Q*de/ae.data.BYTES_PER_ELEMENT,(Q+1)*de/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Q,ae.width,ae.height,1,ve,Te)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ae.width,ae.height,Z.depth,ve,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ue,ae.width,ae.height,Z.depth,0,ae.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ae.width,ae.height,Z.depth,ve,Me,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ue,ae.width,ae.height,Z.depth,0,ve,Me,ae.data)}else{He&&nt&&t.texStorage2D(i.TEXTURE_2D,le,ue,Ue[0].width,Ue[0].height);for(let X=0,xe=Ue.length;X<xe;X++)ae=Ue[X],g.format!==bn?ve!==null?He?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ae.width,ae.height,ve,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ue,ae.width,ae.height,0,ae.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ae.width,ae.height,ve,Me,ae.data):t.texImage2D(i.TEXTURE_2D,X,ue,ae.width,ae.height,0,ve,Me,ae.data)}else if(g.isDataArrayTexture)if(He){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Z.width,Z.height,Z.depth),R)if(g.layerUpdates.size>0){let X=tc(Z.width,Z.height,g.format,g.type);for(let xe of g.layerUpdates){let de=Z.data.subarray(xe*X/Z.data.BYTES_PER_ELEMENT,(xe+1)*X/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,Z.width,Z.height,1,ve,Me,de)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ve,Me,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,ve,Me,Z.data);else if(g.isData3DTexture)He?(nt&&t.texStorage3D(i.TEXTURE_3D,le,ue,Z.width,Z.height,Z.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ve,Me,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,ve,Me,Z.data);else if(g.isFramebufferTexture){if(nt)if(He)t.texStorage2D(i.TEXTURE_2D,le,ue,Z.width,Z.height);else{let X=Z.width,xe=Z.height;for(let de=0;de<le;de++)t.texImage2D(i.TEXTURE_2D,de,ue,X,xe,0,ve,Me,null),X>>=1,xe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Z.parentNode!==X){X.appendChild(Z),p.add(g),X.onpaint=ze=>{let wt=ze.changedElements;for(let at of p)wt.includes(at.image)&&(at.needsUpdate=!0)},X.requestPaint();return}let xe=0,de=i.RGBA,Q=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,xe,de,Q,Te,Z),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&nt){let X=yt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,le,ue,X.width,X.height)}for(let X=0,xe=Ue.length;X<xe;X++)ae=Ue[X],He?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ve,Me,ae):t.texImage2D(i.TEXTURE_2D,X,ue,ve,Me,ae);g.generateMipmaps=!1}else if(He){if(nt){let X=yt(Z);t.texStorage2D(i.TEXTURE_2D,le,ue,X.width,X.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Me,Z)}else t.texImage2D(i.TEXTURE_2D,0,ue,ve,Me,Z);d(g)&&M($),he.__version=oe.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ee(y,g,N){if(g.image.length!==6)return;let $=Y(y,g),ee=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);let oe=n.get(ee);if(ee.version!==oe.__version||$===!0){t.activeTexture(i.TEXTURE0+N);let he=Je.getPrimaries(Je.workingColorSpace),W=g.colorSpace===oi?null:Je.getPrimaries(g.colorSpace),Z=g.colorSpace===oi||he===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Me=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!ve&&!Me?ue[Q]=h(g.image[Q],!0,r.maxCubemapSize):ue[Q]=Me?g.image[Q].image:g.image[Q],ue[Q]=pe(g,ue[Q]);let ae=ue[0],Ue=s.convert(g.format,g.colorSpace),He=s.convert(g.type),nt=E(g.internalFormat,Ue,He,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,le=oe.__version===void 0||$===!0,X=ee.dataReady,xe=S(g,ae);Ne(i.TEXTURE_CUBE_MAP,g);let de;if(ve){R&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,nt,ae.width,ae.height);for(let Q=0;Q<6;Q++){de=ue[Q].mipmaps;for(let Te=0;Te<de.length;Te++){let ze=de[Te];g.format!==bn?Ue!==null?R?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,ze.width,ze.height,Ue,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,nt,ze.width,ze.height,0,ze.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,ze.width,ze.height,Ue,He,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,nt,ze.width,ze.height,0,Ue,He,ze.data)}}}else{if(de=g.mipmaps,R&&le){de.length>0&&xe++;let Q=yt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Me){R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,Ue,He,ue[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,ue[Q].width,ue[Q].height,0,Ue,He,ue[Q].data);for(let Te=0;Te<de.length;Te++){let wt=de[Te].image[Q].image;R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,wt.width,wt.height,Ue,He,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,nt,wt.width,wt.height,0,Ue,He,wt.data)}}else{R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,He,ue[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Ue,He,ue[Q]);for(let Te=0;Te<de.length;Te++){let ze=de[Te];R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ue,He,ze.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,nt,Ue,He,ze.image[Q])}}}d(g)&&M(i.TEXTURE_CUBE_MAP),oe.__version=ee.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Re(y,g,N,$,ee,oe){let he=s.convert(N.format,N.colorSpace),W=s.convert(N.type),Z=E(N.internalFormat,he,W,N.normalized,N.colorSpace),ve=n.get(g),Me=n.get(N);if(Me.__renderTarget=g,!ve.__hasExternalTextures){let ue=Math.max(1,g.width>>oe),ae=Math.max(1,g.height>>oe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,Z,ue,ae,g.depth,0,he,W,null):t.texImage2D(ee,oe,Z,ue,ae,0,he,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Ze(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,Me.__webglTexture,0,It(g)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,Me.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(y,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){let $=g.depthTexture,ee=$&&$.isDepthTexture?$.type:null,oe=T(g.stencilBuffer,ee),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(g),oe,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(g),oe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,oe,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,y)}else{let $=g.textures;for(let ee=0;ee<$.length;ee++){let oe=$[ee],he=s.convert(oe.format,oe.colorSpace),W=s.convert(oe.type),Z=E(oe.internalFormat,he,W,oe.normalized,oe.colorSpace);Ze(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(g),Z,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(g),Z,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(y,g,N){let $=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,g.depthTexture);let ve=s.convert(g.depthTexture.format),Me=s.convert(g.depthTexture.type),ue;g.depthTexture.format===Vn?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===Ri&&(ue=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ue,g.width,g.height,0,ve,Me,null)}}else j(g.depthTexture,0);let oe=ee.__webglTexture,he=It(g),W=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Z=g.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)Ze(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,oe,0);else if(g.depthTexture.format===Ri)Ze(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,oe,0);else throw new Error("Unknown depthTexture format")}function Qe(y){let g=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){let $=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){let ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=$}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let $=0;$<6;$++)ke(g.__webglFramebuffer[$],y,$);else{let $=y.texture.mipmaps;$&&$.length>0?ke(g.__webglFramebuffer[0],y,0):ke(g.__webglFramebuffer,y,0)}else if(N){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),Ve(g.__webglDepthbuffer[$],y,!1);else{let ee=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,oe)}}else{let $=y.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ve(g.__webglDepthbuffer,y,!1);else{let ee=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(y,g,N){let $=n.get(y);g!==void 0&&Re($.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Qe(y)}function Ye(y){let g=y.texture,N=n.get(y),$=n.get(g);y.addEventListener("dispose",v);let ee=y.textures,oe=y.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),oe){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let Z=0;Z<g.mipmaps.length;Z++)N.__webglFramebuffer[W][Z]=i.createFramebuffer()}else N.__webglFramebuffer[W]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)N.__webglFramebuffer[W]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(he)for(let W=0,Z=ee.length;W<Z;W++){let ve=n.get(ee[W]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&Ze(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<ee.length;W++){let Z=ee[W];N.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[W]);let ve=s.convert(Z.format,Z.colorSpace),Me=s.convert(Z.type),ue=E(Z.internalFormat,ve,Me,Z.normalized,Z.colorSpace,y.isXRRenderTarget===!0),ae=It(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ue,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,N.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Re(N.__webglFramebuffer[W][Z],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z);else Re(N.__webglFramebuffer[W],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);d(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let W=0,Z=ee.length;W<Z;W++){let ve=ee[W],Me=n.get(ve),ue=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ue=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Me.__webglTexture),Ne(ue,ve),Re(N.__webglFramebuffer,y,ve,i.COLOR_ATTACHMENT0+W,ue,0),d(ve)&&M(ue)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(W=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,$.__webglTexture),Ne(W,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)Re(N.__webglFramebuffer[Z],y,g,i.COLOR_ATTACHMENT0,W,Z);else Re(N.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,W,0);d(g)&&M(W),t.unbindTexture()}y.depthBuffer&&Qe(y)}function xt(y){let g=y.textures;for(let N=0,$=g.length;N<$;N++){let ee=g[N];if(d(ee)){let oe=w(y),he=n.get(ee).__webglTexture;t.bindTexture(oe,he),M(oe),t.unbindTexture()}}}let ht=[],cn=[];function I(y){if(y.samples>0){if(Ze(y)===!1){let g=y.textures,N=y.width,$=y.height,ee=i.COLOR_BUFFER_BIT,oe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(y),W=g.length>1;if(W)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let Z=y.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[ve]);let Me=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,ee,i.NEAREST),l===!0&&(ht.length=0,cn.length=0,ht.push(i.COLOR_ATTACHMENT0+ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ht.push(oe),cn.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,cn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,he.__webglColorRenderbuffer[ve]);let Me=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){let g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function It(y){return Math.min(r.maxSamples,y.samples)}function Ze(y){let g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ft(y){let g=o.render.frame;f.get(y)!==g&&(f.set(y,g),y.update())}function pe(y,g){let N=y.colorSpace,$=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==Wr&&N!==oi&&(Je.getTransfer(N)===rt?($!==bn||ee!==vn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",N)),g}function yt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=ct,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E0(i,e){function t(n,r=oi){let s,o=Je.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hl)return i.BYTE;if(n===Wl)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===$l)return i.RGB;if(n===bn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===hs||n===fs||n===ps||n===ms)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===jo||n===Ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===ea||n===ta||n===na||n===ia||n===gs||n===ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qo||n===ea)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ta)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===na)return s.COMPRESSED_R11_EAC;if(n===ia)return s.COMPRESSED_SIGNED_R11_EAC;if(n===gs)return s.COMPRESSED_RG11_EAC;if(n===ra)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sa||n===oa||n===aa||n===la||n===ca||n===ua||n===da||n===ha||n===fa||n===pa||n===ma||n===ga||n===_a||n===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===ya||n===Ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Sa||n===_s||n===Ea)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gn({vertexShader:w0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends kn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,u=null,m=null,_=null,b=typeof XRWebGLBinding<"u",h=new mc,d={},M=t.getContextAttributes(),w=null,E=null,T=[],S=[],P=new ot,v=null,C=new Ut;C.viewport=new Et;let L=new Ut;L.viewport=new Et;let A=[C,L],B=new Bo,H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=T[Y];return fe===void 0&&(fe=new br,T[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=T[Y];return fe===void 0&&(fe=new br,T[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=T[Y];return fe===void 0&&(fe=new br,T[Y]=fe),fe.getHandSpace()};function O(Y){let fe=S.indexOf(Y.inputSource);if(fe===-1)return;let se=T[fe];se!==void 0&&(se.update(Y.inputSource,Y.frame,c||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let Y=0;Y<T.length;Y++){let fe=S[Y];fe!==null&&(S[Y]=null,T[Y].disconnect(fe))}H=null,q=null,h.reset();for(let Y in d)delete d[Y];e.setRenderTarget(w),m=null,u=null,p=null,r=null,E=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ae=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=M.stencil?Ri:Vn,Ae=M.stencil?Cr:Dn);let Re={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Re),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new mn(u.textureWidth,u.textureHeight,{format:bn,type:vn,depthTexture:new si(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new mn(m.framebufferWidth,m.framebufferHeight,{format:bn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function U(Y){for(let fe=0;fe<Y.removed.length;fe++){let se=Y.removed[fe],Ae=S.indexOf(se);Ae>=0&&(S[Ae]=null,T[Ae].disconnect(se))}for(let fe=0;fe<Y.added.length;fe++){let se=Y.added[fe],Ae=S.indexOf(se);if(Ae===-1){for(let Re=0;Re<T.length;Re++)if(Re>=S.length){S.push(se),Ae=Re;break}else if(S[Re]===null){S[Re]=se,Ae=Re;break}if(Ae===-1)break}let Ee=T[Ae];Ee&&Ee.connect(se)}}let j=new D,J=new D;function re(Y,fe,se){j.setFromMatrixPosition(fe.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);let Ae=j.distanceTo(J),Ee=fe.projectionMatrix.elements,Re=se.projectionMatrix.elements,Ve=Ee[14]/(Ee[10]-1),ke=Ee[14]/(Ee[10]+1),Qe=(Ee[9]+1)/Ee[5],ct=(Ee[9]-1)/Ee[5],Ye=(Ee[8]-1)/Ee[0],xt=(Re[8]+1)/Re[0],ht=Ve*Ye,cn=Ve*xt,I=Ae/(-Ye+xt),It=I*-Ye;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(I),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let Ze=Ve+I,ft=ke+I,pe=ht-It,yt=cn+(Ae-It),y=Qe*ke/ft*Ze,g=ct*ke/ft*Ze;Y.projectionMatrix.makePerspective(pe,yt,y,g,Ze,ft),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let fe=Y.near,se=Y.far;h.texture!==null&&(h.depthNear>0&&(fe=h.depthNear),h.depthFar>0&&(se=h.depthFar)),B.near=L.near=C.near=fe,B.far=L.far=C.far=se,(H!==B.near||q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,q=B.far),B.layers.mask=Y.layers.mask|6,C.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let Ae=Y.parent,Ee=B.cameras;ce(B,Ae);for(let Re=0;Re<Ee.length;Re++)ce(Ee[Re],Ae);Ee.length===2?re(B,C,L):B.projectionMatrix.copy(C.projectionMatrix),Se(Y,B,Ae)};function Se(Y,fe,se){se===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(B)},this.getCameraTexture=function(Y){return d[Y]};let Xe=null;function et(Y,fe){if(f=fe.getViewerPose(c||o),_=fe,f!==null){let se=f.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ae=!1;se.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let ke=0;ke<se.length;ke++){let Qe=se[ke],ct=null;if(m!==null)ct=m.getViewport(Qe);else{let xt=p.getViewSubImage(u,Qe);ct=xt.viewport,ke===0&&(e.setRenderTargetTextures(E,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(E))}let Ye=A[ke];Ye===void 0&&(Ye=new Ut,Ye.layers.enable(ke),Ye.viewport=new Et,A[ke]=Ye),Ye.matrix.fromArray(Qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ct.x,ct.y,ct.width,ct.height),ke===0&&(B.matrix.copy(Ye.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(Ye)}let Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let ke=p.getDepthInformation(se[0]);ke&&ke.isValid&&ke.texture&&h.init(ke,r.renderState)}if(Ee&&Ee.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let ke=0;ke<se.length;ke++){let Qe=se[ke].camera;if(Qe){let ct=d[Qe];ct||(ct=new rs,d[Qe]=ct);let Ye=p.getCameraImage(Qe);ct.sourceTexture=Ye}}}}for(let se=0;se<T.length;se++){let Ae=S[se],Ee=T[se];Ae!==null&&Ee!==void 0&&Ee.update(Ae,fe,c||o)}Xe&&Xe(Y,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}let Ne=new Sd;Ne.setAnimationLoop(et),this.setAnimationLoop=function(Y){Xe=Y},this.dispose=function(){}}},A0=new vt,Pd=new Be;Pd.set(-1,0,0,0,1,0,0,0,1);function T0(i,e){function t(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function n(h,d){d.color.getRGB(h.fogColor.value,Kl(i)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function r(h,d,M,w,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(h,d):d.isMeshLambertMaterial?(s(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(h,d),p(h,d)):d.isMeshPhongMaterial?(s(h,d),f(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(h,d),u(h,d),d.isMeshPhysicalMaterial&&m(h,d,E)):d.isMeshMatcapMaterial?(s(h,d),_(h,d)):d.isMeshDepthMaterial?s(h,d):d.isMeshDistanceMaterial?(s(h,d),b(h,d)):d.isMeshNormalMaterial?s(h,d):d.isLineBasicMaterial?(o(h,d),d.isLineDashedMaterial&&a(h,d)):d.isPointsMaterial?l(h,d,M,w):d.isSpriteMaterial?c(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,t(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===nn&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,t(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===nn&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,t(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,t(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);let M=e.get(d),w=M.envMap,E=M.envMapRotation;w&&(h.envMap.value=w,h.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(Pd),h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap&&(h.lightMap.value=d.lightMap,h.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,h.lightMapTransform)),d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,h.aoMapTransform))}function o(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform))}function a(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function l(h,d,M,w){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*M,h.scale.value=w*.5,d.map&&(h.map.value=d.map,t(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function c(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function f(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function p(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function u(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,h.roughnessMapTransform)),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,M){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&h.clearcoatNormalScale.value.negate())),d.dispersion>0&&(h.dispersion.value=d.dispersion),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,d){d.matcap&&(h.matcap.value=d.matcap)}function b(h,d){let M=e.get(d).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function P0(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let E=w.program;n.uniformBlockBinding(M,E)}function c(M,w){let E=r[M.id];E===void 0&&(_(M),E=f(M),r[M.id]=E,M.addEventListener("dispose",h));let T=w.program;n.updateUBOMapping(M,T);let S=e.render.frame;s[M.id]!==S&&(u(M),s[M.id]=S)}function f(M){let w=p();M.__bindingPointIndex=w;let E=i.createBuffer(),T=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=r[M.id],E=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let S=0,P=E.length;S<P;S++){let v=Array.isArray(E[S])?E[S]:[E[S]];for(let C=0,L=v.length;C<L;C++){let A=v[C];if(m(A,S,C,T)===!0){let B=A.__offset,H=Array.isArray(A.value)?A.value:[A.value],q=0;for(let O=0;O<H.length;O++){let z=H[O],U=b(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+q,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):ArrayBuffer.isView(z)?A.__data.set(new z.constructor(z.buffer,z.byteOffset,A.__data.length)):(z.toArray(A.__data,q),q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,w,E,T){let S=M.value,P=w+"_"+E;if(T[P]===void 0)return typeof S=="number"||typeof S=="boolean"?T[P]=S:ArrayBuffer.isView(S)?T[P]=S.slice():T[P]=S.clone(),!0;{let v=T[P];if(typeof S=="number"||typeof S=="boolean"){if(v!==S)return T[P]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(v.equals(S)===!1)return v.copy(S),!0}}return!1}function _(M){let w=M.uniforms,E=0,T=16;for(let P=0,v=w.length;P<v;P++){let C=Array.isArray(w[P])?w[P]:[w[P]];for(let L=0,A=C.length;L<A;L++){let B=C[L],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,O=H.length;q<O;q++){let z=H[q],U=b(z),j=E%T,J=j%U.boundary,re=j+J;E+=J,re!==0&&T-re<U.storage&&(E+=T-re),B.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=U.storage}}}let S=E%T;return S>0&&(E+=T-S),M.__size=E,M.__cache={},this}function b(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),w}function h(M){let w=M.target;w.removeEventListener("dispose",h);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var R0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function I0(){return Xn===null&&(Xn=new es(R0,16,16,Ii,Wn),Xn.name="DFG_LUT",Xn.minFilter=Gt,Xn.magFilter=Gt,Xn.wrapS=Bn,Xn.wrapT=Bn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var Pr=class{constructor(e={}){let{canvas:t=Zu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=vn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let b=m,h=new Set([$o,Yo,qo]),d=new Set([vn,Dn,wr,Cr,Ho,Wo]),M=new Uint32Array(4),w=new Int32Array(4),E=new D,T=null,S=null,P=[],v=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,A=!1,B=null;this._outputColorSpace=zt;let H=0,q=0,O=null,z=-1,U=null,j=new Et,J=new Et,re=null,ce=new We(0),Se=0,Xe=t.width,et=t.height,Ne=1,Y=null,fe=null,se=new Et(0,0,Xe,et),Ae=new Et(0,0,Xe,et),Ee=!1,Re=new ns,Ve=!1,ke=!1,Qe=new vt,ct=new D,Ye=new Et,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function cn(){return O===null?Ne:1}let I=n;function It(x,F){return t.getContext(x,F)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ze,!1),I===null){let F="webgl2";if(I=It(F,x),I===null)throw It(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Fe("WebGLRenderer: "+x.message),x}let Ze,ft,pe,yt,y,g,N,$,ee,oe,he,W,Z,ve,Me,ue,ae,Ue,He,nt,R,le,X;function xe(){Ze=new Bm(I),Ze.init(),R=new E0(I,Ze),ft=new Rm(I,Ze,e,R),pe=new b0(I,Ze),ft.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),yt=new zm(I),y=new l0,g=new S0(I,Ze,pe,y,ft,R,yt),N=new Um(L),$=new Wh(I),le=new Tm(I,$),ee=new Vm(I,$,yt,le),oe=new Hm(I,ee,$,le,yt),Ue=new Gm(I,ft,g),Me=new Im(y),he=new a0(L,N,Ze,ft,le,Me),W=new T0(L,y),Z=new u0,ve=new g0(Ze),ae=new Am(L,N,pe,oe,_,l),ue=new M0(L,oe,ft),X=new P0(I,yt,ft,pe),He=new Pm(I,Ze,yt),nt=new km(I,Ze,yt),yt.programs=he.programs,L.capabilities=ft,L.extensions=Ze,L.properties=y,L.renderLists=Z,L.shadowMap=ue,L.state=pe,L.info=yt}xe(),b!==vn&&(C=new Xm(b,t.width,t.height,r,s));let de=new gc(L,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let x=Ze.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ze.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(x){x!==void 0&&(Ne=x,this.setSize(Xe,et,!1))},this.getSize=function(x){return x.set(Xe,et)},this.setSize=function(x,F,G=!0){if(de.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=x,et=F,t.width=Math.floor(x*Ne),t.height=Math.floor(F*Ne),G===!0&&(t.style.width=x+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(Xe*Ne,et*Ne).floor()},this.setDrawingBufferSize=function(x,F,G){Xe=x,et=F,Ne=G,t.width=Math.floor(x*G),t.height=Math.floor(F*G),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(b===vn){Fe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){Oe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(se)},this.setViewport=function(x,F,G,V){x.isVector4?se.set(x.x,x.y,x.z,x.w):se.set(x,F,G,V),pe.viewport(j.copy(se).multiplyScalar(Ne).round())},this.getScissor=function(x){return x.copy(Ae)},this.setScissor=function(x,F,G,V){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,F,G,V),pe.scissor(J.copy(Ae).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(x){pe.setScissorTest(Ee=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,G=!0){let V=0;if(x){let k=!1;if(O!==null){let _e=O.texture.format;k=h.has(_e)}if(k){let _e=O.texture.type,be=d.has(_e),ge=ae.getClearColor(),Ce=ae.getClearAlpha(),Pe=ge.r,Ge=ge.g,$e=ge.b;be?(M[0]=Pe,M[1]=Ge,M[2]=$e,M[3]=Ce,I.clearBufferuiv(I.COLOR,0,M)):(w[0]=Pe,w[1]=Ge,w[2]=$e,w[3]=Ce,I.clearBufferiv(I.COLOR,0,w))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ae.dispose(),Z.dispose(),ve.dispose(),y.dispose(),N.dispose(),oe.dispose(),le.dispose(),X.dispose(),he.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ac),de.removeEventListener("sessionend",Tc),Oi.stop()};function Q(x){x.preventDefault(),jl("WebGLRenderer: Context Lost."),A=!0}function Te(){jl("WebGLRenderer: Context Restored."),A=!1;let x=yt.autoReset,F=ue.enabled,G=ue.autoUpdate,V=ue.needsUpdate,k=ue.type;xe(),yt.autoReset=x,ue.enabled=F,ue.autoUpdate=G,ue.needsUpdate=V,ue.type=k}function ze(x){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function wt(x){let F=x.target;F.removeEventListener("dispose",wt),at(F)}function at(x){Yn(x),y.remove(x)}function Yn(x){let F=y.get(x).programs;F!==void 0&&(F.forEach(function(G){he.releaseProgram(G)}),x.isShaderMaterial&&he.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,G,V,k,_e){F===null&&(F=xt);let be=k.isMesh&&k.matrixWorld.determinant()<0,ge=ih(x,F,G,V,k);pe.setMaterial(V,be);let Ce=G.index,Pe=1;if(V.wireframe===!0){if(Ce=ee.getWireframeAttribute(G),Ce===void 0)return;Pe=2}let Ge=G.drawRange,$e=G.attributes.position,Ie=Ge.start*Pe,lt=(Ge.start+Ge.count)*Pe;_e!==null&&(Ie=Math.max(Ie,_e.start*Pe),lt=Math.min(lt,(_e.start+_e.count)*Pe)),Ce!==null?(Ie=Math.max(Ie,0),lt=Math.min(lt,Ce.count)):$e!=null&&(Ie=Math.max(Ie,0),lt=Math.min(lt,$e.count));let Ct=lt-Ie;if(Ct<0||Ct===1/0)return;le.setup(k,V,ge,G,Ce);let Mt,ut=He;if(Ce!==null&&(Mt=$.get(Ce),ut=nt,ut.setIndex(Mt)),k.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*cn()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(k.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),pe.setLineWidth(Ht*cn()),k.isLineSegments?ut.setMode(I.LINES):k.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else k.isPoints?ut.setMode(I.POINTS):k.isSprite&&ut.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ht=k._multiDrawStarts,ye=k._multiDrawCounts,un=k._multiDrawCount,tt=Ce?$.get(Ce).bytesPerElement:1,xn=y.get(V).currentProgram.getUniforms();for(let Fn=0;Fn<un;Fn++)xn.setValue(I,"_gl_DrawID",Fn),ut.render(Ht[Fn]/tt,ye[Fn])}else if(k.isInstancedMesh)ut.renderInstances(Ie,Ct,k.count);else if(G.isInstancedBufferGeometry){let Ht=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ye=Math.min(G.instanceCount,Ht);ut.renderInstances(Ie,Ct,ye)}else ut.render(Ie,Ct)};function On(x,F,G){x.transparent===!0&&x.side===Gn&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,Rs(x,F,G),x.side=ni,x.needsUpdate=!0,Rs(x,F,G),x.side=Gn):Rs(x,F,G)}this.compile=function(x,F,G=null){G===null&&(G=x),S=ve.get(G),S.init(F),v.push(S),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),x!==G&&x.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();let V=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let _e=k.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){let ge=_e[be];On(ge,G,k),V.add(ge)}else On(_e,G,k),V.add(_e)}),S=v.pop(),V},this.compileAsync=function(x,F,G=null){let V=this.compile(x,F,G);return new Promise(k=>{function _e(){if(V.forEach(function(be){y.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){k(x);return}setTimeout(_e,10)}Ze.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Xa=null;function th(x){Xa&&Xa(x)}function Ac(){Oi.stop()}function Tc(){Oi.start()}let Oi=new Sd;Oi.setAnimationLoop(th),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(x){Xa=x,de.setAnimationLoop(x),x===null?Oi.stop():Oi.start()},de.addEventListener("sessionstart",Ac),de.addEventListener("sessionend",Tc),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;B!==null&&B.renderStart(x,F);let G=de.enabled===!0&&de.isPresenting===!0,V=C!==null&&(O===null||G)&&C.begin(L,O);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,F,O),S=ve.get(x,v.length),S.init(F),S.state.textureUnits=g.getTextureUnits(),v.push(S),Qe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Re.setFromProjectionMatrix(Qe,Tn,F.reversedDepth),ke=this.localClippingEnabled,Ve=Me.init(this.clippingPlanes,ke),T=Z.get(x,P.length),T.init(),P.push(T),de.enabled===!0&&de.isPresenting===!0){let be=L.xr.getDepthSensingMesh();be!==null&&qa(be,F,-1/0,L.sortObjects)}qa(x,F,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(Y,fe),ht=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ht&&ae.addToRenderList(T,x),this.info.render.frame++,Ve===!0&&Me.beginShadows();let k=S.state.shadowsArray;if(ue.render(k,x,F),Ve===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&C.hasRenderPass())===!1){let be=T.opaque,ge=T.transmissive;if(S.setupLights(),F.isArrayCamera){let Ce=F.cameras;if(ge.length>0)for(let Pe=0,Ge=Ce.length;Pe<Ge;Pe++){let $e=Ce[Pe];Rc(be,ge,x,$e)}ht&&ae.render(x);for(let Pe=0,Ge=Ce.length;Pe<Ge;Pe++){let $e=Ce[Pe];Pc(T,x,$e,$e.viewport)}}else ge.length>0&&Rc(be,ge,x,F),ht&&ae.render(x),Pc(T,x,F)}O!==null&&q===0&&(g.updateMultisampleRenderTarget(O),g.updateRenderTargetMipmap(O)),V&&C.end(L),x.isScene===!0&&x.onAfterRender(L,x,F),le.resetDefaultState(),z=-1,U=null,v.pop(),v.length>0?(S=v[v.length-1],g.setTextureUnits(S.state.textureUnits),Ve===!0&&Me.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,B!==null&&B.renderEnd()};function qa(x,F,G,V){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Re.intersectsSprite(x)){V&&Ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Qe);let be=oe.update(x),ge=x.material;ge.visible&&T.push(x,be,ge,G,Ye.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Re.intersectsObject(x))){let be=oe.update(x),ge=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ye.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ye.copy(be.boundingSphere.center)),Ye.applyMatrix4(x.matrixWorld).applyMatrix4(Qe)),Array.isArray(ge)){let Ce=be.groups;for(let Pe=0,Ge=Ce.length;Pe<Ge;Pe++){let $e=Ce[Pe],Ie=ge[$e.materialIndex];Ie&&Ie.visible&&T.push(x,be,Ie,G,Ye.z,$e)}}else ge.visible&&T.push(x,be,ge,G,Ye.z,null)}}let _e=x.children;for(let be=0,ge=_e.length;be<ge;be++)qa(_e[be],F,G,V)}function Pc(x,F,G,V){let{opaque:k,transmissive:_e,transparent:be}=x;S.setupLightsView(G),Ve===!0&&Me.setGlobalState(L.clippingPlanes,G),V&&pe.viewport(j.copy(V)),k.length>0&&Ps(k,F,G),_e.length>0&&Ps(_e,F,G),be.length>0&&Ps(be,F,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Rc(x,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Ie=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new mn(1,1,{generateMipmaps:!0,type:Ie?Wn:vn,minFilter:Pi,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let _e=S.state.transmissionRenderTarget[V.id],be=V.viewport||j;_e.setSize(be.z*L.transmissionResolutionScale,be.w*L.transmissionResolutionScale);let ge=L.getRenderTarget(),Ce=L.getActiveCubeFace(),Pe=L.getActiveMipmapLevel();L.setRenderTarget(_e),L.getClearColor(ce),Se=L.getClearAlpha(),Se<1&&L.setClearColor(16777215,.5),L.clear(),ht&&ae.render(G);let Ge=L.toneMapping;L.toneMapping=In;let $e=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),Ve===!0&&Me.setGlobalState(L.clippingPlanes,V),Ps(x,G,V),g.updateMultisampleRenderTarget(_e),g.updateRenderTargetMipmap(_e),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let lt=0,Ct=F.length;lt<Ct;lt++){let Mt=F[lt],{object:ut,geometry:Ht,material:ye,group:un}=Mt;if(ye.side===Gn&&ut.layers.test(V.layers)){let tt=ye.side;ye.side=nn,ye.needsUpdate=!0,Ic(ut,G,V,Ht,ye,un),ye.side=tt,ye.needsUpdate=!0,Ie=!0}}Ie===!0&&(g.updateMultisampleRenderTarget(_e),g.updateRenderTargetMipmap(_e))}L.setRenderTarget(ge,Ce,Pe),L.setClearColor(ce,Se),$e!==void 0&&(V.viewport=$e),L.toneMapping=Ge}function Ps(x,F,G){let V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,_e=x.length;k<_e;k++){let be=x[k],{object:ge,geometry:Ce,group:Pe}=be,Ge=be.material;Ge.allowOverride===!0&&V!==null&&(Ge=V),ge.layers.test(G.layers)&&Ic(ge,F,G,Ce,Ge,Pe)}}function Ic(x,F,G,V,k,_e){x.onBeforeRender(L,F,G,V,k,_e),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(L,F,G,V,x,_e),k.transparent===!0&&k.side===Gn&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,L.renderBufferDirect(G,F,V,k,x,_e),k.side=ni,k.needsUpdate=!0,L.renderBufferDirect(G,F,V,k,x,_e),k.side=Gn):L.renderBufferDirect(G,F,V,k,x,_e),x.onAfterRender(L,F,G,V,k,_e)}function Rs(x,F,G){F.isScene!==!0&&(F=xt);let V=y.get(x),k=S.state.lights,_e=S.state.shadowsArray,be=k.state.version,ge=he.getParameters(x,k.state,_e,F,G,S.state.lightProbeGridArray),Ce=he.getProgramCacheKey(ge),Pe=V.programs;V.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Ge=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;V.envMap=N.get(x.envMap||V.environment,Ge),V.envMapRotation=V.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",wt),Pe=new Map,V.programs=Pe);let $e=Pe.get(Ce);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===be)return Oc(x,ge),$e}else ge.uniforms=he.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,G,ge),x.onBeforeCompile(ge,L),$e=he.acquireProgram(ge,Ce),Pe.set(Ce,$e),V.uniforms=ge.uniforms;let Ie=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),Oc(x,ge),V.needsLights=sh(x),V.lightsStateVersion=be,V.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=$e,V.uniformsList=null,$e}function Dc(x){if(x.uniformsList===null){let F=x.currentProgram.getUniforms();x.uniformsList=Tr.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function Oc(x,F){let G=y.get(x);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function nh(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;E.setFromMatrixPosition(F.matrixWorld);for(let G=0,V=x.length;G<V;G++){let k=x[G];if(k.texture!==null&&k.boundingBox.containsPoint(E))return k}return null}function ih(x,F,G,V,k){F.isScene!==!0&&(F=xt),g.resetTextureUnits();let _e=F.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,ge=O===null?L.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Je.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=N.get(V.envMap||be,Ce),Ge=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$e=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,Ct=!!G.morphAttributes.color,Mt=In;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=L.toneMapping);let ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ht=ut!==void 0?ut.length:0,ye=y.get(V),un=S.state.lights;if(Ve===!0&&(ke===!0||x!==U)){let pt=x===U&&V.id===z;Me.setState(V,x,pt)}let tt=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==un.state.version||ye.outputColorSpace!==ge||k.isBatchedMesh&&ye.batching===!1||!k.isBatchedMesh&&ye.batching===!0||k.isBatchedMesh&&ye.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ye.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ye.instancing===!1||!k.isInstancedMesh&&ye.instancing===!0||k.isSkinnedMesh&&ye.skinning===!1||!k.isSkinnedMesh&&ye.skinning===!0||k.isInstancedMesh&&ye.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ye.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ye.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ye.instancingMorph===!1&&k.morphTexture!==null||ye.envMap!==Pe||V.fog===!0&&ye.fog!==_e||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Me.numPlanes||ye.numIntersection!==Me.numIntersection)||ye.vertexAlphas!==Ge||ye.vertexTangents!==$e||ye.morphTargets!==Ie||ye.morphNormals!==lt||ye.morphColors!==Ct||ye.toneMapping!==Mt||ye.morphTargetsCount!==Ht||!!ye.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,ye.__version=V.version);let xn=ye.currentProgram;tt===!0&&(xn=Rs(V,F,k),B&&V.isNodeMaterial&&B.onUpdateProgram(V,xn,ye));let Fn=!1,li=!1,tr=!1,dt=xn.getUniforms(),At=ye.uniforms;if(pe.useProgram(xn.program)&&(Fn=!0,li=!0,tr=!0),V.id!==z&&(z=V.id,li=!0),ye.needsLights){let pt=nh(S.state.lightProbeGridArray,k);ye.lightProbeGrid!==pt&&(ye.lightProbeGrid=pt,li=!0)}if(Fn||U!==x){pe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",x.projectionMatrix),dt.setValue(I,"viewMatrix",x.matrixWorldInverse);let ui=dt.map.cameraPosition;ui!==void 0&&ui.setValue(I,ct.setFromMatrixPosition(x.matrixWorld)),ft.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),U!==x&&(U=x,li=!0,tr=!0)}if(ye.needsLights&&(un.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",un.state.directionalShadowMap,g),un.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",un.state.spotShadowMap,g),un.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",un.state.pointShadowMap,g)),k.isSkinnedMesh){dt.setOptional(I,k,"bindMatrix"),dt.setOptional(I,k,"bindMatrixInverse");let pt=k.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),dt.setValue(I,"boneTexture",pt.boneTexture,g))}k.isBatchedMesh&&(dt.setOptional(I,k,"batchingTexture"),dt.setValue(I,"batchingTexture",k._matricesTexture,g),dt.setOptional(I,k,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",k._indirectTexture,g),dt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",k._colorsTexture,g));let ci=G.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Ue.update(k,G,xn),(li||ye.receiveShadow!==k.receiveShadow)&&(ye.receiveShadow=k.receiveShadow,dt.setValue(I,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(At.envMapIntensity.value=F.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=I0()),li){if(dt.setValue(I,"toneMappingExposure",L.toneMappingExposure),ye.needsLights&&rh(At,tr),_e&&V.fog===!0&&W.refreshFogUniforms(At,_e),W.refreshMaterialUniforms(At,V,Ne,et,S.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.lightProbeGrid){let pt=ye.lightProbeGrid;At.probesSH.value=pt.texture,At.probesMin.value.copy(pt.boundingBox.min),At.probesMax.value.copy(pt.boundingBox.max),At.probesResolution.value.copy(pt.resolution)}Tr.upload(I,Dc(ye),At,g)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Tr.upload(I,Dc(ye),At,g),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(I,"center",k.center),dt.setValue(I,"modelViewMatrix",k.modelViewMatrix),dt.setValue(I,"normalMatrix",k.normalMatrix),dt.setValue(I,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){let pt=V.uniformsGroups;for(let ui=0,nr=pt.length;ui<nr;ui++){let Fc=pt[ui];X.update(Fc,xn),X.bind(Fc,xn)}}return xn}function rh(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function sh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,F,G){let V=y.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),y.get(x.texture).__webglTexture=F,y.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){let G=y.get(x);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let oh=I.createFramebuffer();this.setRenderTarget=function(x,F=0,G=0){O=x,H=F,q=G;let V=null,k=!1,_e=!1;if(x){let ge=y.get(x);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),j.copy(x.viewport),J.copy(x.scissor),re=x.scissorTest,pe.viewport(j),pe.scissor(J),pe.setScissorTest(re),z=-1;return}else if(ge.__webglFramebuffer===void 0)g.setupRenderTarget(x);else if(ge.__hasExternalTextures)g.rebindTextures(x,y.get(x.texture).__webglTexture,y.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ge=x.depthTexture;if(ge.__boundDepthTexture!==Ge){if(Ge!==null&&y.has(Ge)&&(x.width!==Ge.image.width||x.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(x)}}let Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(_e=!0);let Pe=y.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?V=Pe[F][G]:V=Pe[F],k=!0):x.samples>0&&g.useMultisampledRTT(x)===!1?V=y.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[G]:V=Pe,j.copy(x.viewport),J.copy(x.scissor),re=x.scissorTest}else j.copy(se).multiplyScalar(Ne).floor(),J.copy(Ae).multiplyScalar(Ne).floor(),re=Ee;if(G!==0&&(V=oh),pe.bindFramebuffer(I.FRAMEBUFFER,V)&&pe.drawBuffers(x,V),pe.viewport(j),pe.scissor(J),pe.setScissorTest(re),k){let ge=y.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,G)}else if(_e){let ge=F;for(let Ce=0;Ce<x.textures.length;Ce++){let Pe=y.get(x.textures[Ce]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,G,ge)}}else if(x!==null&&G!==0){let ge=y.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,G)}z=-1},this.readRenderTargetPixels=function(x,F,G,V,k,_e,be,ge=0){if(!(x&&x.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){pe.bindFramebuffer(I.FRAMEBUFFER,Ce);try{let Pe=x.textures[ge],Ge=Pe.format,$e=Pe.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!ft.textureFormatReadable(Ge)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable($e)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-V&&G>=0&&G<=x.height-k&&I.readPixels(F,G,V,k,R.convert(Ge),R.convert($e),_e)}finally{let Pe=O!==null?y.get(O).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,F,G,V,k,_e,be,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(F>=0&&F<=x.width-V&&G>=0&&G<=x.height-k){pe.bindFramebuffer(I.FRAMEBUFFER,Ce);let Pe=x.textures[ge],Ge=Pe.format,$e=Pe.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!ft.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(F,G,V,k,R.convert(Ge),R.convert($e),0);let lt=O!==null?y.get(O).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,lt);let Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ju(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Ie),I.deleteSync(Ct),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,G=0){let V=Math.pow(2,-G),k=Math.floor(x.image.width*V),_e=Math.floor(x.image.height*V),be=F!==null?F.x:0,ge=F!==null?F.y:0;g.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,be,ge,k,_e),pe.unbindTexture()};let ah=I.createFramebuffer(),lh=I.createFramebuffer();this.copyTextureToTexture=function(x,F,G=null,V=null,k=0,_e=0){let be,ge,Ce,Pe,Ge,$e,Ie,lt,Ct,Mt=x.isCompressedTexture?x.mipmaps[_e]:x.image;if(G!==null)be=G.max.x-G.min.x,ge=G.max.y-G.min.y,Ce=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Ge=G.min.y,$e=G.isBox3?G.min.z:0;else{let At=Math.pow(2,-k);be=Math.floor(Mt.width*At),ge=Math.floor(Mt.height*At),x.isDataArrayTexture?Ce=Mt.depth:x.isData3DTexture?Ce=Math.floor(Mt.depth*At):Ce=1,Pe=0,Ge=0,$e=0}V!==null?(Ie=V.x,lt=V.y,Ct=V.z):(Ie=0,lt=0,Ct=0);let ut=R.convert(F.format),Ht=R.convert(F.type),ye;F.isData3DTexture?(g.setTexture3D(F,0),ye=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(g.setTexture2DArray(F,0),ye=I.TEXTURE_2D_ARRAY):(g.setTexture2D(F,0),ye=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let un=pe.getParameter(I.UNPACK_ROW_LENGTH),tt=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),xn=pe.getParameter(I.UNPACK_SKIP_PIXELS),Fn=pe.getParameter(I.UNPACK_SKIP_ROWS),li=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);let tr=x.isDataArrayTexture||x.isData3DTexture,dt=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){let At=y.get(x),ci=y.get(F),pt=y.get(At.__renderTarget),ui=y.get(ci.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,pt.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let nr=0;nr<Ce;nr++)tr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(x).__webglTexture,k,$e+nr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(F).__webglTexture,_e,Ct+nr)),I.blitFramebuffer(Pe,Ge,be,ge,Ie,lt,be,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||y.has(x)){let At=y.get(x),ci=y.get(F);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ah),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,lh);for(let pt=0;pt<Ce;pt++)tr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,k,$e+pt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,k),dt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ci.__webglTexture,_e,Ct+pt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ci.__webglTexture,_e),k!==0?I.blitFramebuffer(Pe,Ge,be,ge,Ie,lt,be,ge,I.COLOR_BUFFER_BIT,I.NEAREST):dt?I.copyTexSubImage3D(ye,_e,Ie,lt,Ct+pt,Pe,Ge,be,ge):I.copyTexSubImage2D(ye,_e,Ie,lt,Pe,Ge,be,ge);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(ye,_e,Ie,lt,Ct,be,ge,Ce,ut,Ht,Mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,_e,Ie,lt,Ct,be,ge,Ce,ut,Mt.data):I.texSubImage3D(ye,_e,Ie,lt,Ct,be,ge,Ce,ut,Ht,Mt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Ie,lt,be,ge,ut,Ht,Mt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Ie,lt,Mt.width,Mt.height,ut,Mt.data):I.texSubImage2D(I.TEXTURE_2D,_e,Ie,lt,be,ge,ut,Ht,Mt);pe.pixelStorei(I.UNPACK_ROW_LENGTH,un),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,xn),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Fn),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,li),_e===0&&F.generateMipmaps&&I.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(x){y.get(x).__webglFramebuffer===void 0&&g.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?g.setTextureCube(x,0):x.isData3DTexture?g.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?g.setTexture2DArray(x,0):g.setTexture2D(x,0),pe.unbindTexture()},this.resetState=function(){H=0,q=0,O=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var D0=["stage"],_c=4200,O0="assets/images/mesh.json",F0=.08,L0=0,N0=.16,U0=.06,B0=900,Oa=class i{stageRef;platform=dn(di);rafId;renderer;resizeObs;colorStride=2;ngAfterViewInit(){$n(this.platform)&&this.boot()}ngOnDestroy(){this.rafId!==void 0&&cancelAnimationFrame(this.rafId),this.resizeObs?.disconnect(),this.renderer?.dispose()}async boot(){let e=this.stageRef.nativeElement,t=this.isConstrainedDevice(),n=t?1.05:1.35;this.colorStride=t?3:2;let r=new We(131844),s=new We(16446962),o=document.documentElement.classList.contains("light"),a=()=>o?s:r,l=new Xi;l.background=a().clone(),l.fog=new Wi(a().getHex(),.026);let c=new Ut(58,e.clientWidth/e.clientHeight,.1,1e3),f=new Pr({antialias:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,n)),f.outputColorSpace=zt,e.appendChild(f.domElement),this.renderer=f;let p=()=>{let re=e.clientWidth,ce=e.clientHeight;f.setSize(re,ce),c.aspect=re/ce,c.updateProjectionMatrix()};p(),this.resizeObs=new ResizeObserver(p),this.resizeObs.observe(e);let u=[];for(let re=0;re<B0;re++)u.push((Math.random()-.5)*180,(Math.random()-.5)*180,(Math.random()-.5)*180);let m=new Zt;m.setAttribute("position",new Ot(u,3));let _=new Yi(m,new Ei({color:8377599,size:.045,transparent:!0,opacity:.42,blending:o?tn:Rn,depthWrite:!1}));l.add(_);let b=await fetch(O0).then(re=>re.json()),h=this.buildSampler(b),d=h.center.clone(),M=Math.max(h.maxDimension*.75,4),w=h.size.y,E=Math.max(h.maxDimension*.0028,.018),T=new $i(E,6,6),S=new ri({color:16777215,transparent:!0,opacity:.95,blending:o?tn:Rn,depthWrite:!1}),P=new qi(T,S,_c),v=new Pn;v.add(P),l.add(v);let C=Math.max(h.maxDimension*.003,.012),L=Array.from({length:_c},()=>({base:this.randomSurface(h),seedA:Math.random()*1e3,seedB:Math.random()*1e3,seedC:Math.random()*1e3,scale:.6+Math.random()*1.8,drift:C+Math.random()*C*2.4,twinkleSpeed:1.6+Math.random()*2.8,hueOffset:(Math.random()-.5)*.025})),A=_.material,B=document.documentElement,H=()=>parseFloat(getComputedStyle(B).getPropertyValue("--theme-mix"))/100,q=re=>{o=re;let ce=a();l.background.copy(ce),l.fog.color.copy(ce);let Se=o?tn:Rn;S.blending=Se,S.needsUpdate=!0,A.blending=Se,A.needsUpdate=!0},O=new Zi,z=new Sn,U=new We,j=0,J=()=>{this.rafId=requestAnimationFrame(J),j++;let re=H()>.5;re!==o&&q(re);let ce=O.getElapsedTime(),Se=N0+this.waveNoise(ce*.11,3.7)*U0+this.waveNoise(ce*.047,9.1)*.02,Xe=ce*Se,et=ce*.12%1,Ne=Math.sin(ce*.38)*(M*.28)+this.waveNoise(ce*.17,8.2)*(M*.06),Y=M+Ne,fe=d.y+w*F0;c.position.set(d.x+Math.cos(Xe)*Y,fe,d.z+Math.sin(Xe)*Y),c.lookAt(d),v.rotation.y+=.0014,v.rotation.x=Math.sin(ce*.22)*.035,v.rotation.z=Math.cos(ce*.18)*.025,v.position.y=w*L0;let se=j%this.colorStride===0;for(let Ae=0;Ae<_c;Ae++){let Ee=L[Ae],Re=this.waveNoise(ce*(1.05+Ee.scale*.45),Ee.seedA)*Ee.drift,Ve=this.waveNoise(ce*(1.18+Ee.scale*.55),Ee.seedB)*Ee.drift,ke=this.waveNoise(ce*(.96+Ee.scale*.5),Ee.seedC)*Ee.drift;z.position.set(Ee.base.x+Re,Ee.base.y+Ve,Ee.base.z+ke);let Qe=.72+this.waveNoise(ce*Ee.twinkleSpeed,Ee.seedA*4)*.28;z.scale.setScalar(Ee.scale*(.9+Qe*.14)),z.updateMatrix(),P.setMatrixAt(Ae,z.matrix),se&&(U.setHSL(((et+Ee.hueOffset)%1+1)%1,1,o?.22+Qe*.18:.38+Qe*.32),P.setColorAt(Ae,U))}P.instanceMatrix.needsUpdate=!0,se&&P.instanceColor&&(P.instanceColor.needsUpdate=!0),S.opacity=.76+this.waveNoise(ce*1.55,5.8)*.12,_.material.color.setHSL((et+.08)%1,.9,o?.28:.62),_.rotation.y+=4e-4,_.rotation.x=this.waveNoise(ce*.08,12.4)*.03,f.render(l,c)};J()}vertex(e,t,n){let r=t*3;return n.set(e[r],e[r+1],e[r+2])}buildSampler(e){let t=e.positions,n=e.indices?.length?e.indices:Array.from({length:t.length/3},(h,d)=>d),r=[],s=[],o=0,a=new D,l=new D,c=new D,f=new D,p=new D,u=new D,m=new an;for(let h=0;h<t.length/3;h++)m.expandByPoint(this.vertex(t,h,new D));for(let h=0;h<n.length;h+=3){this.vertex(t,n[h],a),this.vertex(t,n[h+1],l),this.vertex(t,n[h+2],c),f.subVectors(l,a),p.subVectors(c,a),u.crossVectors(f,p);let d=u.length()*.5;d<=1e-6||(o+=d,s.push(o),r.push([n[h],n[h+1],n[h+2]]))}let _=m.getSize(new D),b=m.getCenter(new D);return{positions:t,triangles:r,cumulativeAreas:s,totalArea:o,size:_,center:b,maxDimension:Math.max(_.x,_.y,_.z)}}randomSurface(e){let t=Math.random()*e.totalArea,n=0,r=e.cumulativeAreas.length-1;for(;n<r;){let m=n+r>>1;t<=e.cumulativeAreas[m]?r=m:n=m+1}let[s,o,a]=e.triangles[n],l=this.vertex(e.positions,s,new D),c=this.vertex(e.positions,o,new D),f=this.vertex(e.positions,a,new D),p=Math.random(),u=Math.random();return p+u>1&&(p=1-p,u=1-u),new D().copy(l).addScaledVector(new D().subVectors(c,l),p).addScaledVector(new D().subVectors(f,l),u)}waveNoise(e,t){let n=Math.sin(e+t),r=Math.sin(e*.53+t*1.91),s=Math.sin(e*1.73+t*.37);return n*.55+r*.3+s*.15}isConstrainedDevice(){let e=window.innerWidth<=768,t=navigator.hardwareConcurrency??4,n=navigator.deviceMemory??4;return e||t<=4||n<=4}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-projects"]],viewQuery:function(t,n){if(t&1&&Os(D0,5),t&2){let r;Fs(r=Ls())&&(n.stageRef=r.first)}},decls:2,vars:0,consts:[["stage",""],[1,"projects-stage"]],template:function(t,n){t&1&&st(0,"div",1,0)},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.projects-stage[_ngcontent-%COMP%]{width:100%;height:100%;min-height:calc(100vh - 64px);overflow:hidden;background:#020304}.projects-stage[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}"]})};var Fa=class i{content=Zn;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-home"]],decls:38,vars:6,consts:[[1,"hero-section"],[1,"cube-bg"],[1,"hero-container"],[1,"hero-grid"],[1,"hero-content"],[1,"availability-pill"],[1,"availability-dot"],[1,"hero-name"],[1,"hero-title"],[1,"hero-subtitle"],[1,"hero-headline"],[1,"hero-location"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round",1,"loc-icon"],["d","M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"],["cx","12","cy","10","r","3"],[1,"hero-ctas"],[1,"lab-path"],["href","#lab",1,"cta-primary","cta-primary--lab"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"cta-icon"],["d","M5 12h14"],["d","m12 5 7 7-7 7"],["href","#contact",1,"cta-secondary"],["width","20","height","16","x","2","y","4","rx","2"],["d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],[1,"photo-card"],["src","assets/images/profile/portrait_final.jpg","alt","Neilwinn Pineda",1,"profile-img"]],template:function(t,n){t&1&&(we(0,"section",0)(1,"div",1),bt(2,"app-projects"),De(),we(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),bt(7,"span",6),we(8,"span"),ie(9,"Available for Opportunities"),De()(),we(10,"h1",7),ie(11),De(),we(12,"h2",8),ie(13),De(),we(14,"p",9),ie(15),De(),we(16,"p",10),ie(17),De(),we(18,"div",11),it(),we(19,"svg",12),bt(20,"path",13)(21,"circle",14),De(),Pt(),we(22,"span"),ie(23),De()(),we(24,"div",15)(25,"div",16)(26,"a",17),ie(27," Try the Lab "),it(),we(28,"svg",18),bt(29,"path",19)(30,"path",20),De()()(),Pt(),we(31,"a",21),it(),we(32,"svg",18),bt(33,"rect",22)(34,"path",23),De(),ie(35," Get in Touch "),De()()(),Pt(),we(36,"div",24),bt(37,"img",25),De()()()()),t&2&&(te(11),je(n.content.hero.name),te(2),je(n.content.hero.title),te(2),je(n.content.hero.subtitle),te(2),je(n.content.hero.headline),te(6),Fr("",n.content.hero.location.city,", ",n.content.hero.location.country))},dependencies:[Oa],styles:['.hero-section[_ngcontent-%COMP%]{position:relative;min-height:calc(100svh - 64px - clamp(3rem,8vh,5.5rem));display:flex;align-items:center;overflow:hidden}.cube-bg[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;opacity:.32;pointer-events:none}.hero-section[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;z-index:1;background:radial-gradient(ellipse 55% 75% at 30% 50%,color-mix(in srgb,var(--mat-sys-surface) 70%,transparent) 0%,transparent 100%);pointer-events:none}.hero-container[_ngcontent-%COMP%]{position:relative;z-index:2;width:100%;max-width:var(--content-max);margin:0 auto;padding:4rem var(--content-pad-x)}.hero-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;align-items:center;gap:5rem}@media(max-width:768px){.hero-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem}.hero-container[_ngcontent-%COMP%]{padding:3rem 1.5rem}.photo-card[_ngcontent-%COMP%]{width:100%;max-width:13rem;height:16rem;margin:0 auto}}@media(max-width:480px){.hero-container[_ngcontent-%COMP%]{padding:2rem var(--content-pad-x-mobile)}.hero-title[_ngcontent-%COMP%]{font-size:1.1rem}.hero-headline[_ngcontent-%COMP%]{font-size:.85rem}.hero-ctas[_ngcontent-%COMP%]{align-items:stretch}.lab-path[_ngcontent-%COMP%], .cta-primary[_ngcontent-%COMP%], .cta-secondary[_ngcontent-%COMP%]{width:100%}.cta-primary[_ngcontent-%COMP%], .cta-secondary[_ngcontent-%COMP%]{justify-content:center}}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.availability-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.375rem .875rem;border-radius:9999px;border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 30%,transparent);background:color-mix(in srgb,var(--color-spicy-paprika) 10%,transparent);color:var(--color-spicy-paprika);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;width:fit-content;margin-bottom:2rem}.availability-dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:9999px;background:var(--color-spicy-paprika);animation:_ngcontent-%COMP%_pulse 2s infinite;flex-shrink:0}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.4}}.hero-name[_ngcontent-%COMP%]{font-size:clamp(2.5rem,5vw,3.75rem);font-weight:700;color:var(--text-primary);line-height:1.1;margin:0 0 .75rem}.hero-title[_ngcontent-%COMP%]{font-size:1.375rem;font-weight:500;color:var(--text-accent);margin:0 0 1rem}.hero-subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);letter-spacing:.12em;text-transform:uppercase;margin:0 0 1.5rem}.hero-headline[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.75;color:var(--text-secondary);max-width:36rem;margin:0 0 1.75rem}.hero-location[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.8rem;color:var(--text-tertiary);margin-bottom:2.5rem}.loc-icon[_ngcontent-%COMP%]{width:.95rem;height:.95rem;flex-shrink:0;color:var(--text-tertiary)}.hero-ctas[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:flex-end;gap:.875rem}.lab-path[_ngcontent-%COMP%]{position:relative;display:inline-flex;align-items:center}.cta-primary--lab[_ngcontent-%COMP%]{position:relative;overflow:visible;box-shadow:0 0 0 1px color-mix(in srgb,var(--color-spicy-paprika) 24%,transparent),0 0 18px color-mix(in srgb,var(--color-spicy-paprika) 28%,transparent);animation:_ngcontent-%COMP%_lab-cta-radiate 2.6s ease-in-out infinite}.cta-primary--lab[_ngcontent-%COMP%]:before, .cta-primary--lab[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-.38rem;border-radius:calc(var(--section-control-radius) + .45rem);border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 34%,transparent);pointer-events:none;animation:_ngcontent-%COMP%_lab-cta-ring 2.6s ease-in-out infinite}.cta-primary--lab[_ngcontent-%COMP%]:after{inset:-.74rem;opacity:.42;animation-delay:.24s}@keyframes _ngcontent-%COMP%_lab-cta-radiate{0%,to{box-shadow:0 0 0 1px color-mix(in srgb,var(--color-spicy-paprika) 18%,transparent),0 0 14px color-mix(in srgb,var(--color-spicy-paprika) 20%,transparent)}50%{box-shadow:0 0 0 1px color-mix(in srgb,var(--color-spicy-paprika) 38%,transparent),0 0 28px color-mix(in srgb,var(--color-spicy-paprika) 42%,transparent)}}@keyframes _ngcontent-%COMP%_lab-cta-ring{0%,to{opacity:.18;transform:scale(.98)}50%{opacity:.72;transform:scale(1.04)}}.cta-primary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:.5rem;background:var(--color-spicy-paprika);color:#fff;font-size:.875rem;font-weight:500;text-decoration:none;transition:background .15s}.cta-primary[_ngcontent-%COMP%]:hover{background:var(--color-tomato)}.cta-secondary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:.5rem;border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 40%,transparent);color:var(--text-accent);font-size:.875rem;text-decoration:none;transition:border-color .15s,color .15s}.cta-secondary[_ngcontent-%COMP%]:hover{border-color:var(--color-spicy-paprika)}.cta-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;flex-shrink:0}.photo-card[_ngcontent-%COMP%]{width:16rem;height:20rem;border-radius:var(--section-card-radius);overflow:hidden;border:1px solid var(--border);flex-shrink:0;box-shadow:0 0 0 1px color-mix(in srgb,var(--color-spicy-paprika) 15%,transparent),0 24px 48px color-mix(in srgb,rgba(0,0,0,.38) calc(100% - var(--theme-mix)),rgba(0,0,0,.12) var(--theme-mix))}.profile-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-top:4rem;padding-top:3rem;border-top:1px solid var(--border)}@media(max-width:640px){.stats-row[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.lab-path[_ngcontent-%COMP%]{width:100%}}@media(prefers-reduced-motion:reduce){.cta-primary--lab[_ngcontent-%COMP%], .cta-primary--lab[_ngcontent-%COMP%]:before, .cta-primary--lab[_ngcontent-%COMP%]:after{animation:none}}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;text-align:center}.stat-value[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--color-spicy-paprika);line-height:1}.stat-label[_ngcontent-%COMP%]{font-size:.7rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.1em}']})};var Id=["1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","3.jpg","30.jpg","31.jpg","32.jpg","33.jpg","34.jpg","35.jpg","36.jpg","37.jpg","38.jpg","39.jpg","4.jpg","40.jpg","41.jpg","42.jpg","43.jpg","44.jpg","45.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];var k0=(i,e)=>e.rowIndex,Dd=(i,e)=>e.index,z0=(i,e)=>e.src;function G0(i,e){if(i&1&&(K(0,"a",36),En("click",function(n){return n.stopPropagation()}),it(),K(1,"svg",9),st(2,"path",37)(3,"path",38)(4,"path",39),ne()()),i&2){let t=Le(2).$implicit;Dt("href",t.fullSrc,Vt)}}function H0(i,e){if(i&1){let t=Ln();K(0,"div",33),En("mouseenter",function(){gt(t);let r=Le().$implicit,s=Le(2);return _t(s.setHovered(r.index))})("mouseleave",function(){gt(t);let r=Le().$implicit,s=Le(2);return _t(s.leaveCard(r.index))})("click",function(){gt(t);let r=Le().$implicit,s=Le(2);return _t(s.toggle(r.index))}),K(1,"img",34),En("load",function(){gt(t);let r=Le().$implicit,s=Le(2);return _t(s.onImageLoad(r.index,s.currentImageSrc(r)))})("error",function(){gt(t);let r=Le().$implicit,s=Le(2);return _t(s.onError(r.index))}),ne(),Kt(2,G0,5,1,"a",35),ne()}if(i&2){let t=Le().$implicit,n=Le().$implicit,r=Le();kt("portfolio-card--featured",t.featured)("portfolio-card--hovered",t.index===r.hovered()),hi("data-row",n.rowIndex)("data-col",t.col),te(),Dt("src",r.currentImageSrc(t),Vt),te(),Qt(t.featured?2:-1)}}function W0(i,e){if(i&1&&st(0,"div",32),i&2){let t=Le().$implicit,n=Le().$implicit;hi("data-row",n.rowIndex)("data-col",t.col)}}function X0(i,e){if(i&1&&Kt(0,H0,3,8,"div",31)(1,W0,1,2,"div",32),i&2){let t=e.$implicit,n=Le(2);Qt(t.fullSrc&&!n.borrowedIndices().has(t.index)?0:1)}}function q0(i,e){if(i&1){let t=Ln();K(0,"div",40),En("mouseenter",function(){let r=gt(t).$implicit,s=Le(2);return _t(s.setHovered(r.index))})("mouseleave",function(){let r=gt(t).$implicit,s=Le(2);return _t(s.leaveCard(r.index))})("click",function(){let r=gt(t).$implicit,s=Le(2);return _t(s.toggle(r.index))}),K(1,"img",34),En("load",function(){let r=gt(t).$implicit,s=Le(2);return _t(s.onImageLoad(r.index,s.currentImageSrc(r)))})("error",function(){let r=gt(t).$implicit,s=Le(2);return _t(s.onError(r.index))}),ne()()}if(i&2){let t=e.$implicit,n=Le().$implicit,r=Le();Hc("grid-column",t.gridColumn),kt("portfolio-card--hovered",t.index===r.hovered()),hi("data-row",n.rowIndex)("data-col",t.fillCol),te(),Dt("src",r.currentImageSrc(t),Vt)}}function Y0(i,e){if(i&1&&(K(0,"div",27),st(1,"div",28),Wt(2,X0,2,1,null,null,Dd),Wt(4,q0,2,7,"div",29,Dd),st(6,"div",30),ne()),i&2){let t=e.$implicit,n=Le();ja(t.edgeStyle),hi("data-row",t.rowIndex),te(),hi("data-row",t.rowIndex),te(),Xt(t.items),te(2),Xt(n.borrowedItemsForRow(t.rowIndex)),te(2),hi("data-row",t.rowIndex)}}function $0(i,e){if(i&1){let t=Ln();K(0,"button",41),En("click",function(){let r=gt(t).$implicit,s=Le();return _t(s.goTo(r))}),ie(1),ne()}if(i&2){let t=e.$implicit,n=Le();kt("page-num--active",t===n.page()),te(),je(t+1)}}function Z0(i,e){if(i&1&&(K(0,"a",48),En("click",function(n){return n.stopPropagation()}),it(),K(1,"svg",9),st(2,"path",37)(3,"path",38)(4,"path",39),ne()()),i&2){let t=Le().$implicit;Dt("href",t.src,Vt)}}function J0(i,e){if(i&1){let t=Ln();K(0,"div",45),En("click",function(){let r=gt(t).$index,s=Le().$index,o=Le();return _t(o.toggleCert(s*2+r))}),st(1,"img",46),Kt(2,Z0,5,1,"a",47),ne()}if(i&2){let t=e.$implicit,n=e.$index,r=Le().$index,s=Le();kt("cert-img-card--active",s.activeCert()===r*2+n),te(),Dt("src",t.src,Vt)("alt",t.alt),te(),Qt(s.activeCert()===r*2+n?2:-1)}}function j0(i,e){if(i&1&&(K(0,"div",42),st(1,"div",43),Wt(2,J0,3,5,"div",44,z0),st(4,"div",43),ne()),i&2){let t=e.$implicit;ja(t.edgeStyle),te(2),Xt(t.certs)}}function K0(i,e){if(i&1&&(K(0,"li"),ie(1),ne()),i&2){let t=e.$implicit;te(),je(t)}}function Q0(i,e){if(i&1&&(K(0,"div",23)(1,"h4",49),ie(2,"Recent Progress"),ne(),K(3,"ul",50),Wt(4,K0,2,1,"li",null,fi),ne()()),i&2){let t=Le();te(4),Xt(t.content.gameEngine.recentProgress)}}function e_(i,e){if(i&1&&(K(0,"span",25),ie(1),ne()),i&2){let t=e.$implicit;te(),je(t)}}function t_(i,e){if(i&1&&(K(0,"a",26),it(),K(1,"svg",9),st(2,"path",51)(3,"path",52),ne(),ie(4," View on GitHub "),ne()),i&2){let t=Le();Dt("href",t.content.gameEngine.github,Vt)}}var bs=16,n_=3e3,Od="assets/images/portfolio/",i_="assets/images/portfolio/thumbs/",La=class i{content=Zn;activeCert=mt(null);toggleCert(e){this.activeCert.update(t=>t===e?null:e)}all;revision=mt(0);isBrowser=$n(dn(di));featuredRevertDelay=null;resizeObs;resizeDebounce=null;el=dn(Fi);zone=dn(Vc);resizeTick=mt(0);page=mt(0);featured=mt(null);hovered=mt(null);fullLoaded=mt({});pageItems=qt(()=>(this.revision(),this.all.slice(this.page()*bs,(this.page()+1)*bs)));slotItems=qt(()=>{let e=this.pageItems();return Array.from({length:bs},(t,n)=>e[n]??null)});displayItems=qt(()=>this.slotItems().map((e,t)=>({fullSrc:e?`${Od}${encodeURIComponent(e)}`:null,thumbSrc:e?`${i_}${encodeURIComponent(e)}`:null,index:t,featured:t===this.featured(),col:t%4+1,row:Math.floor(t/4)})));featuredItem=qt(()=>{let e=this.featured();if(e===null)return null;let t=this.displayItems()[e];return t?.fullSrc?t:null});borrowedTiles=qt(()=>{let e=this.featuredItem();if(!e)return[];let t=[1,2,3,4].filter(r=>r!==e.col),n=this.borrowCandidates(e);return t.map((r,s)=>{let o=n[s];return o?.fullSrc?jt(Tt({},o),{fillCol:r,targetRow:e.row,gridColumn:this.featuredGapColumn(e.col,r)}):null}).filter(r=>r!==null)});borrowedIndices=qt(()=>new Set(this.borrowedTiles().map(e=>e.index)));certRows=qt(()=>{this.resizeTick();let e=Zn.certificates;return Array.from({length:Math.ceil(e.length/2)},(t,n)=>({certs:e.slice(n*2,n*2+2),edgeStyle:`--cert-s:${(.5+Math.random()*5).toFixed(2)}rem;--cert-e:${(.5+Math.random()*5).toFixed(2)}rem`}))});edgeWidths=qt(()=>(this.page(),this.resizeTick(),Array.from({length:4},()=>({s:(.5+Math.random()*5).toFixed(2),e:(.5+Math.random()*5).toFixed(2)}))));rows=qt(()=>Array.from({length:4},(e,t)=>{let n=this.edgeWidths()[t];return{rowIndex:t,items:this.displayItems().slice(t*4,t*4+4),edgeStyle:`--edge-start-w:${n.s}rem;--edge-end-w:${n.e}rem`}}));totalPages=qt(()=>Math.ceil(this.all.length/bs));pageNumbers=qt(()=>Array.from({length:this.totalPages()},(e,t)=>t));constructor(){this.all=[...Id].sort((e,t)=>this.compareImageNames(e,t))}ngAfterViewInit(){this.isBrowser&&(this.resizeObs=new ResizeObserver(()=>{this.resizeDebounce&&clearTimeout(this.resizeDebounce),this.resizeDebounce=setTimeout(()=>this.zone.run(()=>this.resizeTick.update(e=>e+1)),1200)}),this.el.nativeElement.querySelectorAll(".portfolio-row, .cert-row").forEach(e=>this.resizeObs.observe(e)))}ngOnDestroy(){this.resizeObs?.disconnect(),this.resizeDebounce&&clearTimeout(this.resizeDebounce)}toggle(e){if(!this.slotItems()[e])return;this.clearFeaturedRevertDelay();let t=this.featured()===e?null:e;t!==null&&this.ensureFullImage(t),this.featured.set(t)}setHovered(e){let t=this.featured();if(t!==null&&e!==t){this.hovered.set(null);return}e!==null&&t!==null&&e===t&&this.clearFeaturedRevertDelay(),this.hovered.set(e)}leaveCard(e){this.featured()===e&&this.scheduleFeaturedRevertDelay(e),this.hovered()===e&&this.hovered.set(null)}goTo(e){this.page.set(e),this.featured.set(null),this.hovered.set(null);let t=document.getElementById("portfolio");if(t){let n=t.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:n,behavior:"smooth"})}}prev(){this.page()>0&&this.goTo(this.page()-1)}next(){this.page()<this.totalPages()-1&&this.goTo(this.page()+1)}onError(e){if(!this.slotItems()[e])return;let t=this.page()*bs+e;this.all.splice(t,1),this.featured()===e&&this.featured.set(null),this.hovered()===e&&this.hovered.set(null),this.revision.update(n=>n+1)}currentImageSrc(e){return!e.fullSrc||!e.thumbSrc?e.fullSrc??e.thumbSrc:e.featured&&this.fullLoaded()[e.index]?e.fullSrc:e.thumbSrc}borrowedItemsForRow(e){return this.borrowedTiles().filter(t=>t.targetRow===e)}onImageLoad(e,t){(!t||!t.includes("/thumbs/"))&&this.fullLoaded.update(n=>jt(Tt({},n),{[e]:!0}))}ensureFullImage(e){if(!this.isBrowser||this.fullLoaded()[e])return;let t=this.slotItems()[e];if(!t)return;let n=`${Od}${encodeURIComponent(t)}`,r=new Image;r.onload=()=>{this.fullLoaded.update(s=>jt(Tt({},s),{[e]:!0}))},r.src=n}compareImageNames(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})}scheduleFeaturedRevertDelay(e){this.clearFeaturedRevertDelay(),this.featuredRevertDelay=setTimeout(()=>{this.featured()===e&&this.featured.set(null),this.featuredRevertDelay=null},n_)}clearFeaturedRevertDelay(){this.featuredRevertDelay&&(clearTimeout(this.featuredRevertDelay),this.featuredRevertDelay=null)}borrowCandidates(e){return this.displayItems().filter(n=>n.fullSrc&&n.index!==e.index&&n.row!==e.row).sort((n,r)=>{let s=n.row>e.row?0:1,o=r.row>e.row?0:1;if(s!==o)return s-o;let a=Math.abs(n.row-e.row)-Math.abs(r.row-e.row);return a!==0?a:n.index-r.index})}featuredGapColumn(e,t){return{1:{2:"14 / 18",3:"18 / 22",4:"22 / 26"},2:{1:"2 / 6",3:"18 / 22",4:"22 / 26"},3:{1:"2 / 6",2:"6 / 10",4:"22 / 26"},4:{1:"2 / 6",2:"6 / 10",3:"10 / 14"}}[e]?.[t]??""}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-portfolio"]],decls:46,vars:7,consts:[[1,"portfolio-page"],[1,"portfolio-intro"],[1,"section-label"],[1,"portfolio-heading"],[1,"portfolio-sub"],[1,"portfolio-grid"],[1,"portfolio-row",3,"style"],[1,"pagination"],["aria-label","Previous page",1,"page-btn",3,"click","disabled"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","m15 18-6-6 6-6"],[1,"page-num",3,"page-num--active"],["aria-label","Next page",1,"page-btn",3,"click","disabled"],["d","m9 18 6-6-6-6"],[1,"cert-section"],[1,"cert-gallery"],[1,"cert-row",3,"style"],["id","engine",1,"engine-section","spy-anchor"],[1,"engine-card"],[1,"engine-header"],[1,"engine-name"],[1,"engine-status"],[1,"engine-desc"],[1,"engine-progress"],[1,"engine-tags"],[1,"engine-tag"],["target","_blank","rel","noopener",1,"engine-github",3,"href"],[1,"portfolio-row"],["data-col","edge-start","data-edge","start","aria-hidden","true",1,"portfolio-card","portfolio-card--mock","portfolio-card--edge"],[1,"portfolio-card","portfolio-card--borrowed",3,"portfolio-card--hovered","grid-column"],["data-col","edge-end","data-edge","end","aria-hidden","true",1,"portfolio-card","portfolio-card--mock","portfolio-card--edge"],[1,"portfolio-card",3,"portfolio-card--featured","portfolio-card--hovered"],["aria-hidden","true",1,"portfolio-card","portfolio-card--mock"],[1,"portfolio-card",3,"mouseenter","mouseleave","click"],["alt","Portfolio image","loading","lazy",1,"card-image",3,"load","error","src"],["target","_blank","rel","noopener","aria-label","Open image in new tab",1,"open-btn",3,"href"],["target","_blank","rel","noopener","aria-label","Open image in new tab",1,"open-btn",3,"click","href"],["d","M15 3h6v6"],["d","M10 14 21 3"],["d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"],[1,"portfolio-card","portfolio-card--borrowed",3,"mouseenter","mouseleave","click"],[1,"page-num",3,"click"],[1,"cert-row"],[1,"cert-edge-spacer"],[1,"cert-img-card",3,"cert-img-card--active"],[1,"cert-img-card",3,"click"],["loading","lazy",1,"cert-img",3,"src","alt"],["target","_blank","rel","noopener","aria-label","Open certificate in new tab",1,"open-btn",3,"href"],["target","_blank","rel","noopener","aria-label","Open certificate in new tab",1,"open-btn",3,"click","href"],[1,"engine-progress-title"],[1,"engine-progress-list"],["d","M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"],["d","M9 18c-4.51 2-5-2-7-2"]],template:function(t,n){t&1&&(K(0,"div",0)(1,"section",1)(2,"span",2),ie(3,"Work Showcase"),ne(),K(4,"h1",3),ie(5,"Technical Workspace Archive"),ne(),K(6,"p",4),ie(7,"A live archive of production work, rendering studies, runtime research, and internal tool experiments."),ne()(),K(8,"div",5),Wt(9,Y0,7,5,"div",6,k0),ne(),K(11,"div",7)(12,"button",8),En("click",function(){return n.prev()}),it(),K(13,"svg",9),st(14,"path",10),ne()(),Wt(15,$0,2,3,"button",11,fi),Pt(),K(17,"button",12),En("click",function(){return n.next()}),it(),K(18,"svg",9),st(19,"path",13),ne()()(),Pt(),K(20,"section",14)(21,"span",2),ie(22,"Credentials"),ne(),K(23,"h2",3),ie(24,"Certificates"),ne(),K(25,"div",15),Wt(26,j0,5,2,"div",16,Gc),ne()(),K(28,"section",17)(29,"span",2),ie(30,"Flagship Technical Track"),ne(),K(31,"h2",3),ie(32,"Runtime and Engine Research"),ne(),K(33,"div",18)(34,"div",19)(35,"h3",20),ie(36),ne(),K(37,"span",21),ie(38),ne()(),K(39,"p",22),ie(40),ne(),Kt(41,Q0,6,0,"div",23),K(42,"div",24),Wt(43,e_,2,1,"span",25,fi),ne(),Kt(45,t_,5,1,"a",26),ne()()()),t&2&&(te(9),Xt(n.rows()),te(3),Dt("disabled",n.page()===0),te(3),Xt(n.pageNumbers()),te(2),Dt("disabled",n.page()===n.totalPages()-1),te(9),Xt(n.certRows()),te(10),je(n.content.gameEngine.name),te(2),je(n.content.gameEngine.status),te(2),je(n.content.gameEngine.description),te(),Qt(n.content.gameEngine.recentProgress.length?41:-1),te(2),Xt(n.content.gameEngine.tech),te(2),Qt(n.content.gameEngine.github?45:-1))},styles:['.portfolio-page[_ngcontent-%COMP%]{max-width:var(--content-max);margin:0 auto;padding:4rem var(--content-pad-x) 6rem}.section-label[_ngcontent-%COMP%]{display:inline-block;font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.15em;color:var(--color-spicy-paprika);margin-bottom:1.25rem}.portfolio-intro[_ngcontent-%COMP%]{max-width:var(--section-intro-max);margin-bottom:2.5rem}.portfolio-heading[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;color:var(--text-primary);line-height:1.1;margin:0 0 1rem}.portfolio-sub[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.8;color:var(--text-secondary);margin:0}.portfolio-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.9rem}.portfolio-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(var(--edge-start-w, 1.25rem),.7fr) repeat(24,minmax(0,1fr)) minmax(var(--edge-end-w, 1.25rem),.7fr);grid-auto-rows:15rem;gap:.9rem;align-items:start;transition:grid-template-columns 1.8s cubic-bezier(.25,.46,.45,.94)}@keyframes _ngcontent-%COMP%_featured-settle{0%{opacity:.6}to{opacity:1}}.portfolio-card[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-width:0;border-radius:.6rem;overflow:hidden;cursor:pointer;border:1px solid var(--border);background:var(--surface-card);box-shadow:0 10px 24px #0000001f;transition:grid-column 2.8s cubic-bezier(.16,1,.3,1),grid-row 2.8s cubic-bezier(.16,1,.3,1),height 3.2s cubic-bezier(.16,1,.3,1),transform 2.4s cubic-bezier(.16,1,.3,1),box-shadow 2.4s cubic-bezier(.16,1,.3,1),border-color 1.4s ease,opacity 1.4s ease}.portfolio-card[_ngcontent-%COMP%]:hover:not(.portfolio-card--mock){transform:translateY(-2px) scale(1.015);border-color:color-mix(in srgb,var(--color-spicy-paprika) 38%,var(--border));box-shadow:0 18px 36px #0000002e}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered:not(.portfolio-card--featured))   .portfolio-card[_ngcontent-%COMP%]{transition:grid-column 5.8s cubic-bezier(.16,1,.3,1),grid-row 5.8s cubic-bezier(.16,1,.3,1),height 5.8s cubic-bezier(.16,1,.3,1),transform 4.6s cubic-bezier(.16,1,.3,1),box-shadow 4.6s cubic-bezier(.16,1,.3,1),border-color 2.2s ease,opacity 2.2s ease}.portfolio-card--featured[_ngcontent-%COMP%]{grid-row:span 2;border-color:color-mix(in srgb,var(--color-spicy-paprika) 48%,var(--border));box-shadow:0 26px 48px #0000003d;animation:_ngcontent-%COMP%_featured-settle .35s ease both}.portfolio-card--borrowed[_ngcontent-%COMP%]{grid-row:2 / 3;z-index:2}.portfolio-card--mock[_ngcontent-%COMP%]{cursor:default;opacity:.9;background:var(--page-bg);border:1px solid color-mix(in srgb,rgba(255,255,255,.04) calc(100% - var(--theme-mix)),rgba(0,0,0,.08) var(--theme-mix));box-shadow:none}.portfolio-card--edge[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.portfolio-card--edge[data-edge=start][_ngcontent-%COMP%]{grid-column:1 / 2}.portfolio-card--edge[data-edge=end][_ngcontent-%COMP%]{grid-column:-2 / -1}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured)   .portfolio-card--edge[_ngcontent-%COMP%]{grid-row:span 2}.portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 8}.portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:8 / 14}.portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:14 / 20}.portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:20 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="1"]:not(.portfolio-card--featured))   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 11}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="1"]:not(.portfolio-card--featured))   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:11 / 16}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="1"]:not(.portfolio-card--featured))   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:16 / 21}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="1"]:not(.portfolio-card--featured))   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:21 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="2"]:not(.portfolio-card--featured))   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 7}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="2"]:not(.portfolio-card--featured))   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:7 / 16}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="2"]:not(.portfolio-card--featured))   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:16 / 21}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="2"]:not(.portfolio-card--featured))   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:21 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="3"]:not(.portfolio-card--featured))   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 7}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="3"]:not(.portfolio-card--featured))   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:7 / 12}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="3"]:not(.portfolio-card--featured))   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:12 / 21}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="3"]:not(.portfolio-card--featured))   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:21 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="4"]:not(.portfolio-card--featured))   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 7}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="4"]:not(.portfolio-card--featured))   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:7 / 12}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="4"]:not(.portfolio-card--featured))   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:12 / 17}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--hovered[data-col="4"]:not(.portfolio-card--featured))   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:17 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="1"])   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 14}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="1"])   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:14 / 18}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="1"])   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:18 / 22}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="1"])   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:22 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="2"])   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 6}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="2"])   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:6 / 18}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="2"])   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:18 / 22}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="2"])   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:22 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="3"])   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 6}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="3"])   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:6 / 10}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="3"])   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:10 / 22}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="3"])   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:22 / 26}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="4"])   .portfolio-card[data-col="1"][_ngcontent-%COMP%]{grid-column:2 / 6}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="4"])   .portfolio-card[data-col="2"][_ngcontent-%COMP%]{grid-column:6 / 10}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="4"])   .portfolio-card[data-col="3"][_ngcontent-%COMP%]{grid-column:10 / 14}.portfolio-row[_ngcontent-%COMP%]:has(.portfolio-card--featured[data-col="4"])   .portfolio-card[data-col="4"][_ngcontent-%COMP%]{grid-column:14 / 26}.portfolio-card--mock[_ngcontent-%COMP%]:hover{transform:none;border-color:var(--border-subtle);box-shadow:none}.card-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center;display:block;opacity:.82;transition:transform 3.2s cubic-bezier(.16,1,.3,1),opacity 1.4s ease}.portfolio-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%], .portfolio-card--featured[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{opacity:1}.portfolio-card--featured[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{transform:scale(1.03)}.open-btn[_ngcontent-%COMP%]{position:absolute;top:.75rem;right:.75rem;width:2.25rem;height:2.25rem;border-radius:50%;background:#00000080;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.15);color:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:background .2s,transform .2s;z-index:10}.open-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:.95rem;height:.95rem}.open-btn[_ngcontent-%COMP%]:hover{background:var(--color-spicy-paprika);transform:scale(1.1)}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.375rem;margin-top:2.5rem;flex-wrap:wrap}.page-btn[_ngcontent-%COMP%]{width:2.25rem;height:2.25rem;border-radius:50%;border:1px solid var(--border);background:var(--surface-card);color:var(--text-secondary);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:border-color .15s,color .15s}.page-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1rem;height:1rem}.page-btn[_ngcontent-%COMP%]:hover:not(:disabled){border-color:var(--color-spicy-paprika);color:var(--color-spicy-paprika)}.page-btn[_ngcontent-%COMP%]:disabled{opacity:.3;cursor:default}.page-num[_ngcontent-%COMP%]{min-width:2.25rem;height:2.25rem;padding:0 .5rem;border-radius:.375rem;border:1px solid var(--border);background:var(--surface-card);color:var(--text-secondary);font-size:.8rem;cursor:pointer;transition:border-color .15s,color .15s,background .15s}.page-num[_ngcontent-%COMP%]:hover{color:var(--color-spicy-paprika);border-color:color-mix(in srgb,var(--color-spicy-paprika) 40%,transparent)}.page-num--active[_ngcontent-%COMP%]{background:var(--color-spicy-paprika);border-color:var(--color-spicy-paprika);color:#fff}@media(max-width:768px){.cert-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.cert-edge-spacer[_ngcontent-%COMP%]{display:none}.cert-img-card[_ngcontent-%COMP%]{min-height:14rem}}@media(max-width:640px){.portfolio-page[_ngcontent-%COMP%]{padding:2.5rem var(--content-pad-x-mobile) 5rem}.portfolio-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:10rem;gap:.5rem}.portfolio-row[_ngcontent-%COMP%]{display:contents}.portfolio-card[_ngcontent-%COMP%]{grid-column:auto!important;grid-row:auto!important;height:auto;transition:opacity .3s ease!important;transform:none!important;animation:none!important}.portfolio-card--featured[_ngcontent-%COMP%]{grid-column:1 / -1!important;grid-row:span 2!important}.portfolio-card--mock[_ngcontent-%COMP%], .portfolio-card--edge[_ngcontent-%COMP%], .portfolio-card--borrowed[_ngcontent-%COMP%]{display:none!important}.pagination[_ngcontent-%COMP%]{margin-top:1.5rem}.cert-section[_ngcontent-%COMP%], .engine-section[_ngcontent-%COMP%]{margin-top:3rem;padding-top:2.5rem}.cert-row[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:.75rem}.cert-edge-spacer[_ngcontent-%COMP%]{display:none}.cert-img-card[_ngcontent-%COMP%]{min-height:0;aspect-ratio:4 / 3;border-radius:var(--section-card-radius)}.cert-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cert-img-card--active[_ngcontent-%COMP%]{grid-column:auto;animation:none;box-shadow:0 16px 30px #00000038}.cert-row[_ngcontent-%COMP%]:has(.cert-img-card--active)   .cert-img-card[_ngcontent-%COMP%]:not(.cert-img-card--active){display:block}.engine-card[_ngcontent-%COMP%]{padding:1.25rem}.engine-name[_ngcontent-%COMP%]{font-size:1.1rem}.engine-header[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.5rem}}.cert-section[_ngcontent-%COMP%], .engine-section[_ngcontent-%COMP%]{margin-top:5rem;padding-top:4rem;border-top:1px solid var(--border)}.cert-gallery[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;margin-top:2rem}.cert-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(var(--cert-s, 1rem),.7fr) 1fr 1fr minmax(var(--cert-e, 1rem),.7fr);gap:1.25rem;transition:grid-template-columns 1.8s cubic-bezier(.25,.46,.45,.94)}.cert-edge-spacer[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.cert-img-card[_ngcontent-%COMP%]{position:relative;display:block;border-radius:var(--section-card-radius);overflow:hidden;border:1px solid var(--border);cursor:pointer;transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease,border-color .2s}.cert-img-card[_ngcontent-%COMP%]:hover:not(.cert-img-card--active){transform:translateY(-3px) scale(1.005);border-color:color-mix(in srgb,var(--color-spicy-paprika) 45%,var(--border));box-shadow:0 20px 48px #00000047}.cert-img-card--active[_ngcontent-%COMP%]{grid-column:2 / 4;border-color:color-mix(in srgb,var(--color-spicy-paprika) 48%,var(--border));box-shadow:0 26px 48px #0000003d;animation:_ngcontent-%COMP%_featured-settle .35s ease both}.cert-row[_ngcontent-%COMP%]:has(.cert-img-card--active)   .cert-img-card[_ngcontent-%COMP%]:not(.cert-img-card--active){display:none}.cert-img[_ngcontent-%COMP%]{width:100%;height:auto;display:block}.engine-card[_ngcontent-%COMP%]{margin-top:2rem;padding:2rem 2.25rem;border-radius:var(--section-card-radius);border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 25%,var(--border));background:var(--surface-card)}.engine-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:.875rem}.engine-name[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;color:var(--text-primary);margin:0}.engine-status[_ngcontent-%COMP%]{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;padding:.25rem .65rem;border-radius:2rem;background:color-mix(in srgb,var(--color-spicy-paprika) 14%,transparent);color:var(--color-spicy-paprika);border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 30%,transparent)}.engine-desc[_ngcontent-%COMP%]{font-size:.88rem;line-height:1.75;color:var(--text-secondary);margin:0 0 1.25rem;max-width:60rem}.engine-progress[_ngcontent-%COMP%]{margin:0 0 1.3rem}.engine-progress-title[_ngcontent-%COMP%]{margin:0 0 .55rem;font-size:.76rem;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--text-primary)}.engine-progress-list[_ngcontent-%COMP%]{margin:0;padding-left:1.1rem;display:grid;gap:.4rem;font-size:.86rem;line-height:1.6;color:var(--text-secondary)}.engine-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem}.engine-tag[_ngcontent-%COMP%]{font-size:.72rem;font-weight:500;padding:.25rem .65rem;border-radius:.375rem;border:1px solid var(--border);color:var(--text-secondary);background:color-mix(in srgb,var(--color-spicy-paprika) 6%,transparent)}.engine-github[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;font-size:.8rem;font-weight:500;color:var(--text-secondary);border:1px solid var(--border);border-radius:var(--section-control-radius);padding:.5rem .875rem;text-decoration:none;transition:border-color .15s,color .15s}.engine-github[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1rem;height:1rem}.engine-github[_ngcontent-%COMP%]:hover{border-color:var(--color-spicy-paprika);color:var(--color-spicy-paprika)}']})};var zd=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||i)(hn(Za),hn(Fi))};static \u0275dir=Li({type:i})}return i})(),Gd=(()=>{class i extends zd{static \u0275fac=(()=>{let t;return function(r){return(t||(t=$a(i)))(r||i)}})();static \u0275dir=Li({type:i,features:[rr]})}return i})(),Sc=new ir("");var r_={provide:Sc,useExisting:Is(()=>ka),multi:!0};function s_(){let i=Ka()?Ka().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var o_=new ir(""),ka=(()=>{class i extends zd{_compositionMode;_composing=!1;constructor(t,n,r){super(t,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!s_())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||i)(hn(Za),hn(Fi),hn(o_,8))};static \u0275dir=Li({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&en("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[Ns([r_]),rr]})}return i})();var a_=new ir(""),l_=new ir("");function Hd(i){return i!=null}function Wd(i){return zc(i)?Nc(i):i}function Xd(i){let e={};return i.forEach(t=>{e=t!=null?Tt(Tt({},e),t):e}),Object.keys(e).length===0?null:e}function qd(i,e){return e.map(t=>t(i))}function c_(i){return!i.validate}function Yd(i){return i.map(e=>c_(e)?e:t=>e.validate(t))}function u_(i){if(!i)return null;let e=i.filter(Hd);return e.length==0?null:function(t){return Xd(qd(t,e))}}function $d(i){return i!=null?u_(Yd(i)):null}function d_(i){if(!i)return null;let e=i.filter(Hd);return e.length==0?null:function(t){let n=qd(t,e).map(Wd);return Bc(n).pipe(Uc(Xd))}}function Zd(i){return i!=null?d_(Yd(i)):null}function Fd(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function h_(i){return i._rawValidators}function f_(i){return i._rawAsyncValidators}function vc(i){return i?Array.isArray(i)?i:[i]:[]}function Ua(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ld(i,e){let t=vc(e);return vc(i).forEach(r=>{Ua(t,r)||t.push(r)}),t}function Nd(i,e){return vc(e).filter(t=>!Ua(i,t))}var Ba=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$d(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Zd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},xc=class extends Ba{name;get formDirective(){return null}get path(){return null}},As=class extends Ba{_parent=null;name=null;valueAccessor=null},yc=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Jd=(()=>{class i extends yc{constructor(t){super(t)}static \u0275fac=function(n){return new(n||i)(hn(As,2))};static \u0275dir=Li({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&kt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[rr]})}return i})();var Ss="VALID",Na="INVALID",Dr="PENDING",Es="DISABLED",er=class{},Va=class extends er{value;source;constructor(e,t){super(),this.value=e,this.source=t}},ws=class extends er{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},Cs=class extends er{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Or=class extends er{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var Mc=class extends er{source;constructor(e){super(),this.source=e}};function p_(i){return(za(i)?i.validators:i)||null}function m_(i){return Array.isArray(i)?$d(i):i||null}function g_(i,e){return(za(e)?e.asyncValidators:i)||null}function __(i){return Array.isArray(i)?Zd(i):i||null}function za(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var bc=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Ui(this.statusReactive)}set status(e){Ui(()=>this.statusReactive.set(e))}_status=qt(()=>this.statusReactive());statusReactive=mt(void 0);get valid(){return this.status===Ss}get invalid(){return this.status===Na}get pending(){return this.status===Dr}get disabled(){return this.status===Es}get enabled(){return this.status!==Es}errors;get pristine(){return Ui(this.pristineReactive)}set pristine(e){Ui(()=>this.pristineReactive.set(e))}_pristine=qt(()=>this.pristineReactive());pristineReactive=mt(!0);get dirty(){return!this.pristine}get touched(){return Ui(this.touchedReactive)}set touched(e){Ui(()=>this.touchedReactive.set(e))}_touched=qt(()=>this.touchedReactive());touchedReactive=mt(!1);get untouched(){return!this.touched}_events=new Lc;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ld(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ld(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Nd(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Nd(e,this._rawAsyncValidators))}hasValidator(e){return Ua(this._rawValidators,e)}hasAsyncValidator(e){return Ua(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(jt(Tt({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Cs(!0,n))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),e.onlySelf||this._parent?._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new Cs(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(jt(Tt({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new ws(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new ws(!0,n))}markAsPending(e={}){this.status=Dr;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Or(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(jt(Tt({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Es,this.errors=null,this._forEachChild(r=>{r.disable(jt(Tt({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Va(this.value,n)),this._events.next(new Or(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(jt(Tt({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Ss,this._forEachChild(n=>{n.enable(jt(Tt({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(jt(Tt({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ss||this.status===Dr)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Va(this.value,t)),this._events.next(new Or(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(jt(Tt({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Es:Ss}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Dr,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let n=Wd(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n?.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new Or(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new Ds,this.statusChanges=new Ds}_calculateStatus(){return this._allControlsDisabled()?Es:this.errors?Na:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Dr)?Dr:this._anyControlsHaveStatus(Na)?Na:Ss}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new ws(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Cs(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){za(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=m_(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=__(this._rawAsyncValidators)}};var jd=new ir("",{factory:()=>Ec}),Ec="always";function v_(i,e){return[...e.path,i]}function x_(i,e,t=Ec){M_(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),b_(i,e),E_(i,e),S_(i,e),y_(i,e)}function Ud(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function y_(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function M_(i,e){let t=h_(i);e.validator!==null?i.setValidators(Fd(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=f_(i);e.asyncValidator!==null?i.setAsyncValidators(Fd(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ud(e._rawValidators,r),Ud(e._rawAsyncValidators,r)}function b_(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Kd(i,e)})}function S_(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Kd(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Kd(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function E_(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function w_(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function C_(i){return Object.getPrototypeOf(i.constructor)===Gd}function A_(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===ka?t=s:C_(s)?n=s:r=s}),r||n||t||null}function Bd(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Vd(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var T_=class extends bc{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(p_(t),g_(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),za(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Vd(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Mc(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Bd(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Bd(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Vd(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var P_={provide:As,useExisting:Is(()=>wc)},kd=Promise.resolve(),wc=(()=>{class i extends As{_changeDetectorRef;callSetDisabledState;control=new T_;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Ds;constructor(t,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=A_(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),w_(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){x_(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){kd.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&qc(n);kd.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?v_(t,this._parent):[t]}static \u0275fac=function(n){return new(n||i)(hn(xc,9),hn(a_,10),hn(l_,10),hn(Sc,10),hn(Xc,8),hn(jd,8))};static \u0275dir=Li({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ns([P_]),rr,kc]})}return i})();var R_={provide:Sc,useExisting:Is(()=>Cc),multi:!0},Cc=(()=>{class i extends Gd{writeValue(t){this.setProperty("value",parseFloat(t))}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=$a(i)))(r||i)}})();static \u0275dir=Li({type:i,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(n,r){n&1&&en("change",function(o){return r.onChange(o.target.value)})("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[Ns([R_]),rr]})}return i})();var I_=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ja({type:i});static \u0275inj=Ya({})}return i})();var Qd=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:jd,useValue:t.callSetDisabledState??Ec}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ja({type:i});static \u0275inj=Ya({imports:[I_]})}return i})();var O_=["stage"];function F_(i,e){i&1&&(we(0,"div",8)(1,"strong"),ie(2,"Tune the cloud"),De(),we(3,"span"),ie(4,"Shape the drift, density, and motion."),De(),bt(5,"div",18),De())}function L_(i,e){i&1&&(it(),we(0,"svg",23),bt(1,"rect",28)(2,"path",29),De())}function N_(i,e){i&1&&(it(),we(0,"svg",23),bt(1,"rect",28)(2,"path",30),De())}function U_(i,e){i&1&&(we(0,"em",26),ie(1,"\u25CF live"),De())}function B_(i,e){if(i&1&&(we(0,"em"),ie(1),sr(2,"number"),De()),i&2){let t=Le(2);te(),Ni("",Lr(2,1,t.driftAmount(),"1.2-2"),"\xD7")}}function V_(i,e){i&1&&(it(),we(0,"svg",23),bt(1,"rect",31)(2,"rect",32),De())}function k_(i,e){i&1&&(it(),we(0,"svg",23),bt(1,"polygon",33),De())}function z_(i,e){if(i&1){let t=Ln();we(0,"div",17)(1,"p",19),ie(2,"Scene tuner"),De(),we(3,"div",20)(4,"span",21),ie(5," Particles "),we(6,"em"),ie(7),sr(8,"number"),De(),we(9,"button",22),en("click",function(){gt(t);let r=Le();return _t(r.extremeUnlocked.update(s=>!s))}),Kt(10,L_,3,0,":svg:svg",23)(11,N_,3,0,":svg:svg",23),De()(),we(12,"input",24),en("ngModelChange",function(r){gt(t);let s=Le();return _t(s.particleCount.set(+r))}),De()(),we(13,"label",20)(14,"span",21),ie(15,"Size "),we(16,"em"),ie(17),sr(18,"number"),De()(),we(19,"input",25),en("ngModelChange",function(r){gt(t);let s=Le();return _t(s.particleSize.set(+r))}),De()(),we(20,"div",20)(21,"span",21),ie(22," Drift "),Kt(23,U_,2,0,"em",26)(24,B_,3,4,"em"),we(25,"button",22),en("click",function(){gt(t);let r=Le();return _t(r.toggleAudio())}),Kt(26,V_,3,0,":svg:svg",23)(27,k_,2,0,":svg:svg",23),De()(),we(28,"input",27),en("ngModelChange",function(r){gt(t);let s=Le();return _t(s.driftAmount.set(+r))}),De()(),we(29,"label",20)(30,"span",21),ie(31,"Orbit speed "),we(32,"em"),ie(33),sr(34,"number"),De()(),we(35,"input",25),en("ngModelChange",function(r){gt(t);let s=Le();return _t(s.orbitSpeed.set(+r))}),De()(),we(36,"label",20)(37,"span",21),ie(38,"Hue speed "),we(39,"em"),ie(40),sr(41,"number"),De()(),we(42,"input",25),en("ngModelChange",function(r){gt(t);let s=Le();return _t(s.hueSpeed.set(+r))}),De()()()}if(i&2){let t=Le();te(7),je(Wc(8,20,t.particleCount())),te(2),kt("tuner-lock--open",t.extremeUnlocked()),pi("title",t.extremeUnlocked()?"Lock to safe range":"Unlock extreme counts"),te(),Qt(t.extremeUnlocked()?10:11),te(2),pi("max",t.extremeUnlocked()?t.extremeMaxParticles():t.safeMaxParticles())("ngModel",t.particleCount()),te(5),Ni("",Lr(18,22,t.particleSize(),"1.2-2"),"\xD7"),te(2),pi("ngModel",t.particleSize()),te(4),Qt(t.audioActive()?23:24),te(2),kt("tuner-lock--open",t.audioActive()),pi("title",t.audioActive()?"Stop music":"Drive drift from music"),te(),Qt(t.audioActive()?26:27),te(2),pi("disabled",t.audioActive())("ngModel",t.driftAmount()),te(5),Ni("",Lr(34,25,t.orbitSpeed(),"1.2-2"),"\xD7"),te(2),pi("ngModel",t.orbitSpeed()),te(5),Ni("",Lr(41,28,t.hueSpeed(),"1.2-2"),"\xD7"),te(2),pi("ngModel",t.hueSpeed())}}var Ts=12e4,G_="assets/images/mesh.json",H_=.08,W_=0,Ga=class i{stageRef;platform=dn(di);rafId;renderer;resizeObs;particleCount=mt(1e4);particleSize=mt(1);driftAmount=mt(1);orbitSpeed=mt(1);hueSpeed=mt(1);panelOpen=mt(!1);extremeUnlocked=mt(!1);audioActive=mt(!1);safeMaxParticles=mt(5e4);extremeMaxParticles=mt(Ts);audioCtx;analyser;audioEl;audioData;profile={pixelRatioCap:1.5,starCount:1e3,defaultParticles:1e4,safeMaxParticles:5e4,extremeMaxParticles:Ts,colorStride:2};ngAfterViewInit(){$n(this.platform)&&this.boot()}ngOnDestroy(){this.rafId!==void 0&&cancelAnimationFrame(this.rafId),this.resizeObs?.disconnect(),this.renderer?.dispose(),this.stopAudio()}async toggleAudio(){if(this.audioActive()){this.stopAudio();return}let e=new Audio("assets/mp3/Corporate Harmonics_1.49.mp3");e.loop=!0,e.crossOrigin="anonymous",this.audioCtx=new AudioContext,this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.audioData=new Uint8Array(this.analyser.frequencyBinCount),this.audioCtx.createMediaElementSource(e).connect(this.analyser),this.analyser.connect(this.audioCtx.destination),this.audioEl=e,await e.play(),this.audioActive.set(!0)}stopAudio(){this.audioEl?.pause(),this.audioCtx?.close(),this.audioCtx=this.analyser=this.audioEl=this.audioData=void 0,this.audioActive.set(!1)}readAudioDrift(){if(!this.analyser||!this.audioData)return this.driftAmount();this.analyser.getByteFrequencyData(this.audioData);let e=0;for(let t=0;t<this.audioData.length;t++)this.audioData[t]>e&&(e=this.audioData[t]);return Math.pow(e/255,3.5)*6}async boot(){let e=this.stageRef.nativeElement;this.profile=this.getRenderProfile(),this.particleCount.set(this.profile.defaultParticles),this.safeMaxParticles.set(this.profile.safeMaxParticles),this.extremeMaxParticles.set(this.profile.extremeMaxParticles);let t=new We(131844),n=new We(16446962),r=document.documentElement.classList.contains("light"),s=()=>r?n:t,o=new Xi;o.background=s().clone(),o.fog=new Wi(s().getHex(),.026);let a=new Ut(58,e.clientWidth/e.clientHeight,.1,1e3),l=new Pr({antialias:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,this.profile.pixelRatioCap)),l.outputColorSpace=zt,e.appendChild(l.domElement),this.renderer=l;let c=()=>{let j=e.clientWidth,J=e.clientHeight;l.setSize(j,J),a.aspect=j/J,a.updateProjectionMatrix()};c(),this.resizeObs=new ResizeObserver(c),this.resizeObs.observe(e);let f=[];for(let j=0;j<this.profile.starCount;j++)f.push((Math.random()-.5)*180,(Math.random()-.5)*180,(Math.random()-.5)*180);let p=new Zt;p.setAttribute("position",new Ot(f,3));let u=new Yi(p,new Ei({color:8377599,size:.045,transparent:!0,opacity:.42,blending:r?tn:Rn,depthWrite:!1}));o.add(u);let m=await fetch(G_).then(j=>j.json()),_=this.buildSampler(m),b=_.center.clone(),h=Math.max(_.maxDimension*.75,4),d=_.size.y,M=Math.max(_.maxDimension*.0012,.008),w=new $i(M,6,6),E=new ri({color:16777215,transparent:!0,opacity:.95,blending:r?tn:Rn,depthWrite:!1}),T=new qi(w,E,Ts),S=new Pn;S.add(T),o.add(S);let P=Math.max(_.maxDimension*.003,.012),v=Array.from({length:Ts},()=>({base:this.randomSurface(_),seedA:Math.random()*1e3,seedB:Math.random()*1e3,seedC:Math.random()*1e3,scale:.6+Math.random()*1.8,drift:P+Math.random()*P*2.4,twinkleSpeed:1.6+Math.random()*2.8,hueOffset:(Math.random()-.5)*.025})),C=u.material,L=document.documentElement,A=()=>parseFloat(getComputedStyle(L).getPropertyValue("--theme-mix"))/100,B=j=>{r=j;let J=s();o.background.copy(J),o.fog.color.copy(J);let re=r?tn:Rn;E.blending=re,E.needsUpdate=!0,C.blending=re,C.needsUpdate=!0},H=new Zi,q=new Sn,O=new We,z=0,U=()=>{this.rafId=requestAnimationFrame(U),z++;let j=A()>.5;j!==r&&B(j);let J=H.getElapsedTime(),re=this.particleCount(),ce=this.particleSize(),Se=this.audioActive()?this.readAudioDrift():this.driftAmount(),Xe=this.orbitSpeed(),et=this.hueSpeed(),Ne=.16*Xe+this.waveNoise(J*.11,3.7)*.06*Xe+this.waveNoise(J*.047,9.1)*.02*Xe,Y=J*Ne,fe=J*.12*et%1,se=Math.sin(J*.38)*(h*.28)+this.waveNoise(J*.17,8.2)*(h*.06),Ae=h+se;a.position.set(b.x+Math.cos(Y)*Ae,b.y+d*H_,b.z+Math.sin(Y)*Ae),a.lookAt(b),S.rotation.y+=.0014,S.rotation.x=Math.sin(J*.22)*.035,S.rotation.z=Math.cos(J*.18)*.025,S.position.y=d*W_,T.count=re;let Ee=z%this.profile.colorStride===0;for(let Re=0;Re<re;Re++){let Ve=v[Re],ke=ht=>Math.sign(ht)*Math.pow(Math.abs(ht),2.2),Qe=ke(this.waveNoise(J*(1.05+Ve.scale*.45),Ve.seedA))*Ve.drift*Se,ct=ke(this.waveNoise(J*(1.18+Ve.scale*.55),Ve.seedB))*Ve.drift*Se,Ye=ke(this.waveNoise(J*(.96+Ve.scale*.5),Ve.seedC))*Ve.drift*Se;q.position.set(Ve.base.x+Qe,Ve.base.y+ct,Ve.base.z+Ye);let xt=.72+this.waveNoise(J*Ve.twinkleSpeed,Ve.seedA*4)*.28;q.scale.setScalar(Ve.scale*ce*(.9+xt*.14)),q.updateMatrix(),T.setMatrixAt(Re,q.matrix),Ee&&(O.setHSL(((fe+Ve.hueOffset)%1+1)%1,1,r?.22+xt*.18:.38+xt*.32),T.setColorAt(Re,O))}T.instanceMatrix.needsUpdate=!0,Ee&&T.instanceColor&&(T.instanceColor.needsUpdate=!0),E.opacity=.76+this.waveNoise(J*1.55,5.8)*.12,u.material.color.setHSL((fe+.08)%1,.9,r?.28:.62),u.rotation.y+=4e-4,u.rotation.x=this.waveNoise(J*.08,12.4)*.03,l.render(o,a)};U()}vertex(e,t,n){let r=t*3;return n.set(e[r],e[r+1],e[r+2])}buildSampler(e){let t=e.positions,n=e.indices?.length?e.indices:Array.from({length:t.length/3},(h,d)=>d),r=[],s=[],o=0,a=new D,l=new D,c=new D,f=new D,p=new D,u=new D,m=new an;for(let h=0;h<t.length/3;h++)m.expandByPoint(this.vertex(t,h,new D));for(let h=0;h<n.length;h+=3){this.vertex(t,n[h],a),this.vertex(t,n[h+1],l),this.vertex(t,n[h+2],c),f.subVectors(l,a),p.subVectors(c,a),u.crossVectors(f,p);let d=u.length()*.5;d<=1e-6||(o+=d,s.push(o),r.push([n[h],n[h+1],n[h+2]]))}let _=m.getSize(new D),b=m.getCenter(new D);return{positions:t,triangles:r,cumulativeAreas:s,totalArea:o,size:_,center:b,maxDimension:Math.max(_.x,_.y,_.z)}}randomSurface(e){let t=Math.random()*e.totalArea,n=0,r=e.cumulativeAreas.length-1;for(;n<r;){let m=n+r>>1;t<=e.cumulativeAreas[m]?r=m:n=m+1}let[s,o,a]=e.triangles[n],l=this.vertex(e.positions,s,new D),c=this.vertex(e.positions,o,new D),f=this.vertex(e.positions,a,new D),p=Math.random(),u=Math.random();return p+u>1&&(p=1-p,u=1-u),new D().copy(l).addScaledVector(new D().subVectors(c,l),p).addScaledVector(new D().subVectors(f,l),u)}waveNoise(e,t){let n=Math.sin(e+t),r=Math.sin(e*.53+t*1.91),s=Math.sin(e*1.73+t*.37);return n*.55+r*.3+s*.15}getRenderProfile(){let t=window.innerWidth<=768,n=navigator.hardwareConcurrency??4,r=navigator.deviceMemory??4;return t||n<=4||r<=4?{pixelRatioCap:1.1,starCount:700,defaultParticles:7e3,safeMaxParticles:3e4,extremeMaxParticles:8e4,colorStride:3}:{pixelRatioCap:1.5,starCount:1200,defaultParticles:1e4,safeMaxParticles:5e4,extremeMaxParticles:Ts,colorStride:2}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-scene"]],viewQuery:function(t,n){if(t&1&&Os(O_,5),t&2){let r;Fs(r=Ls())&&(n.stageRef=r.first)}},decls:21,vars:6,consts:[["stage",""],[1,"scene-shell"],[1,"scene-intro"],[1,"section-label"],[1,"scene-heading"],[1,"scene-sub"],[1,"scene-stage"],[1,"tuner"],[1,"callout"],["type","button",1,"tuner-toggle",3,"click"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.8","stroke-linecap","round","stroke-linejoin","round"],["x1","4","y1","6","x2","20","y2","6"],["x1","4","y1","12","x2","20","y2","12"],["x1","4","y1","18","x2","20","y2","18"],["cx","9","cy","6","r","2","fill","currentColor","stroke","none"],["cx","15","cy","12","r","2","fill","currentColor","stroke","none"],["cx","9","cy","18","r","2","fill","currentColor","stroke","none"],[1,"tuner-panel"],[1,"callout-arrow"],[1,"tuner-title"],[1,"tuner-row"],[1,"tuner-label"],["type","button",1,"tuner-lock",3,"click","title"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["type","range","min","500","step","500",3,"ngModelChange","max","ngModel"],["type","range","min","0.1","max","4","step","0.05",3,"ngModelChange","ngModel"],[1,"audio-live"],["type","range","min","0","max","4","step","0.05",3,"ngModelChange","disabled","ngModel"],["width","18","height","11","x","3","y","11","rx","2","ry","2"],["d","M7 11V7a5 5 0 0 1 9.9-1"],["d","M7 11V7a5 5 0 0 1 10 0v4"],["x","6","y","4","width","4","height","16"],["x","14","y","4","width","4","height","16"],["points","5 3 19 12 5 21 5 3"]],template:function(t,n){t&1&&(we(0,"div",1)(1,"div",2)(2,"span",3),ie(3,"Interactive"),De(),we(4,"h1",4),ie(5,"The Lab"),De(),we(6,"p",5),ie(7,"A particle cloud built from a 3D mesh \u2014 tune it, sync it to music, or just watch it drift."),De()(),bt(8,"div",6,0),we(10,"div",7),Kt(11,F_,6,0,"div",8),we(12,"button",9),en("click",function(){return n.panelOpen.update(s=>!s)}),it(),we(13,"svg",10),bt(14,"line",11)(15,"line",12)(16,"line",13)(17,"circle",14)(18,"circle",15)(19,"circle",16),De()(),Kt(20,z_,43,31,"div",17),De()()),t&2&&(te(10),kt("tuner--open",n.panelOpen())("tuner--called",!n.panelOpen()),te(),Qt(n.panelOpen()?-1:11),te(9),Qt(n.panelOpen()?20:-1))},dependencies:[Qd,ka,Cc,Jd,wc,Yc],styles:[".scene-shell[_ngcontent-%COMP%]{position:relative;isolation:isolate}.scene-intro[_ngcontent-%COMP%]{position:absolute;top:2.5rem;left:2.5rem;z-index:10;max-width:22rem;pointer-events:none}.section-label[_ngcontent-%COMP%]{display:inline-block;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--text-accent);margin-bottom:.5rem}.scene-heading[_ngcontent-%COMP%]{font-size:clamp(1.75rem,4vw,2.5rem);font-weight:700;color:var(--text-primary);margin:0 0 .625rem;line-height:1.1}.scene-sub[_ngcontent-%COMP%]{font-size:.85rem;line-height:1.65;color:var(--text-secondary);margin:0}@media(max-width:640px){.scene-intro[_ngcontent-%COMP%]{top:1.25rem;left:1.25rem;max-width:calc(100% - 2.5rem)}.scene-sub[_ngcontent-%COMP%]{display:none}.scene-stage[_ngcontent-%COMP%]{min-height:28rem;height:min(72svh,34rem)}}.scene-stage[_ngcontent-%COMP%]{width:100%;height:calc(100svh - 64px - clamp(3rem,8vh,5.5rem));min-height:34rem;overflow:hidden}.scene-stage[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}.callout[_ngcontent-%COMP%]{position:relative;background:#08080ae0;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.1);border-radius:.625rem;padding:.75rem 1rem;width:13rem;display:flex;flex-direction:column;gap:.25rem;animation:_ngcontent-%COMP%_callout-in .4s cubic-bezier(.16,1,.3,1) both;pointer-events:none}.tuner--called[_ngcontent-%COMP%]   .callout[_ngcontent-%COMP%]{box-shadow:0 0 color-mix(in srgb,var(--color-spicy-paprika) 0%,transparent);animation:_ngcontent-%COMP%_callout-in .4s cubic-bezier(.16,1,.3,1) both,_ngcontent-%COMP%_tuner-callout-pulse 2.8s ease-in-out .4s infinite}.callout[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.78rem;color:#fff;font-weight:600}.callout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.72rem;color:#ffffff80;line-height:1.5}.callout-arrow[_ngcontent-%COMP%]{position:absolute;bottom:-.45rem;right:1.1rem;width:.85rem;height:.85rem;background:#08080ae0;border-right:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);transform:rotate(45deg)}@keyframes _ngcontent-%COMP%_callout-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.tuner[_ngcontent-%COMP%]{position:absolute;bottom:1.5rem;right:1.5rem;z-index:10;display:flex;flex-direction:column;align-items:flex-end;gap:.5rem}.tuner-toggle[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:50%;background:var(--color-spicy-paprika);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,transform .2s}.tuner--called[_ngcontent-%COMP%]   .tuner-toggle[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_tuner-toggle-pulse 2.2s ease-in-out infinite}.tuner-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1rem;height:1rem}.tuner-toggle[_ngcontent-%COMP%]:hover{background:var(--color-tomato)}.tuner--open[_ngcontent-%COMP%]   .tuner-toggle[_ngcontent-%COMP%]{background:var(--color-tomato-jam)}.tuner-panel[_ngcontent-%COMP%]{background:#08080ad1;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.08);border-radius:.75rem;padding:1.25rem 1.25rem 1rem;width:17rem;display:flex;flex-direction:column;gap:.875rem}.tuner-title[_ngcontent-%COMP%]{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.14em;color:#ffffff59;margin:0 0 .25rem}.tuner-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem;cursor:default}.tuner-label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.78rem;color:#ffffffa6}.tuner-label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:normal;color:var(--color-spicy-paprika);font-variant-numeric:tabular-nums}.tuner-lock[_ngcontent-%COMP%]{width:1.1rem;height:1.1rem;display:flex;align-items:center;justify-content:center;background:none;border:none;padding:0;cursor:pointer;color:#ffffff4d;transition:color .15s;flex-shrink:0}.tuner-lock[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:.85rem;height:.85rem}.tuner-lock[_ngcontent-%COMP%]:hover, .tuner-lock--open[_ngcontent-%COMP%]{color:var(--color-spicy-paprika)}.audio-live[_ngcontent-%COMP%]{font-style:normal;color:#4ade80;font-size:.7rem;animation:_ngcontent-%COMP%_blink 1.2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_blink{0%,to{opacity:1}50%{opacity:.3}}@keyframes _ngcontent-%COMP%_tuner-callout-pulse{0%,to{box-shadow:0 0 color-mix(in srgb,var(--color-spicy-paprika) 0%,transparent)}50%{box-shadow:0 0 0 5px color-mix(in srgb,var(--color-spicy-paprika) 13%,transparent)}}@keyframes _ngcontent-%COMP%_tuner-toggle-pulse{0%,to{transform:translateY(0)}50%{transform:translateY(-2px)}}input[type=range][_ngcontent-%COMP%]{width:100%;appearance:none;-webkit-appearance:none;height:3px;border-radius:2px;background:#ffffff1f;outline:none;cursor:pointer}input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;width:13px;height:13px;border-radius:50%;background:var(--color-spicy-paprika);cursor:pointer;transition:transform .15s}input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb:hover{transform:scale(1.25)}input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{width:13px;height:13px;border-radius:50%;border:none;background:var(--color-spicy-paprika);cursor:pointer}@media(max-width:640px){.callout[_ngcontent-%COMP%]{display:none}.tuner[_ngcontent-%COMP%]{bottom:1rem;right:1rem;left:1rem;align-items:flex-end}.tuner-panel[_ngcontent-%COMP%]{width:100%;max-width:20rem}}@media(prefers-reduced-motion:reduce){.tuner--called[_ngcontent-%COMP%]   .callout[_ngcontent-%COMP%], .tuner--called[_ngcontent-%COMP%]   .tuner-toggle[_ngcontent-%COMP%], .audio-live[_ngcontent-%COMP%]{animation:none}}"]})};var X_=(i,e)=>e.company,q_=(i,e)=>e.title,Y_=(i,e)=>e.institution;function $_(i,e){if(i&1&&(K(0,"span",8),ie(1),ne()),i&2){let t=e.$implicit;te(),je(t)}}function Z_(i,e){if(i&1&&(K(0,"li"),ie(1),ne()),i&2){let t=e.$implicit;te(),je(t)}}function J_(i,e){if(i&1&&(K(0,"div",15)(1,"div",40)(2,"div",41)(3,"span",42),ie(4),ne(),K(5,"span",43),ie(6),ne()(),K(7,"span",44),ie(8),ne()(),K(9,"ul",45),Wt(10,Z_,2,1,"li",null,fi),ne()()),i&2){let t=e.$implicit;te(4),je(t.company),te(2),je(t.role),te(2),Fr("",t.period.start," \u2013 ",t.period.end),te(2),Xt(t.description)}}function j_(i,e){if(i&1&&(K(0,"span",49),ie(1),ne()),i&2){let t=e.$implicit;te(),je(t)}}function K_(i,e){if(i&1&&(K(0,"div",21)(1,"h3",46),ie(2),ne(),K(3,"p",47),ie(4),ne(),K(5,"div",48),Wt(6,j_,2,1,"span",49,fi),ne()()),i&2){let t=e.$implicit;te(2),je(t.title),te(2),je(t.description),te(2),Xt(t.tools)}}function Q_(i,e){if(i&1&&(K(0,"div",25)(1,"div",50)(2,"span",51),ie(3),ne(),K(4,"span",52),ie(5),ne()(),K(6,"span",53),ie(7),ne()()),i&2){let t=e.$implicit;te(3),je(t.institution),te(2),je(t.degree),te(2),Fr("",t.period.start," \u2013 ",t.period.end)}}var Ha=class i{content=Zn;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-about"]],decls:69,vars:9,consts:[[1,"about-page"],[1,"about-intro"],[1,"section-label"],[1,"about-name"],[1,"about-title"],[1,"about-headline"],[1,"about-note"],[1,"about-tags"],[1,"tag"],["id","skills",1,"about-section","spy-anchor"],[1,"section-heading"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round",1,"section-icon"],["width","20","height","14","x","2","y","7","rx","2"],["d","M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"],[1,"exp-list"],[1,"exp-item"],[1,"about-section"],["width","16","height","16","x","4","y","4","rx","2"],["width","6","height","6","x","9","y","9","rx","1"],["d","M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"],[1,"skills-grid"],[1,"skill-card"],["d","M22 10v6M2 10l10-5 10 5-10 5z"],["d","M6 12v5c3 3 9 3 12 0v-5"],[1,"edu-list"],[1,"edu-item"],[1,"about-closing"],[1,"closing-note"],[1,"closing-ctas"],["download","",1,"cta-resume",3,"href"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round",1,"cta-icon"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"],["target","_blank","rel","noopener",1,"cta-secondary",3,"href"],["d","M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"],["d","M9 18c-4.51 2-5-2-7-2"],[1,"cta-secondary",3,"href"],["width","20","height","16","x","2","y","4","rx","2"],["d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],[1,"exp-header"],[1,"exp-meta"],[1,"exp-company"],[1,"exp-role"],[1,"exp-period"],[1,"exp-desc"],[1,"skill-title"],[1,"skill-desc"],[1,"skill-tools"],[1,"skill-tool"],[1,"edu-left"],[1,"edu-institution"],[1,"edu-degree"],[1,"edu-period"]],template:function(t,n){t&1&&(K(0,"div",0)(1,"section",1)(2,"span",2),ie(3,"About"),ne(),K(4,"h1",3),ie(5),ne(),K(6,"p",4),ie(7),ne(),K(8,"p",5),ie(9),ne(),K(10,"p",6),ie(11),ne(),K(12,"div",7),Wt(13,$_,2,1,"span",8,fi),ne()(),K(15,"section",9)(16,"h2",10),it(),K(17,"svg",11),st(18,"rect",12)(19,"path",13),ne(),ie(20," Experience "),ne(),Pt(),K(21,"div",14),Wt(22,J_,12,4,"div",15,X_),ne()(),K(24,"section",16)(25,"h2",10),it(),K(26,"svg",11),st(27,"rect",17)(28,"rect",18)(29,"path",19),ne(),ie(30," Skills "),ne(),Pt(),K(31,"div",20),Wt(32,K_,8,2,"div",21,q_),ne()(),K(34,"section",16)(35,"h2",10),it(),K(36,"svg",11),st(37,"path",22)(38,"path",23),ne(),ie(39," Education "),ne(),Pt(),K(40,"div",24),Wt(41,Q_,8,4,"div",25,Y_),ne()(),K(43,"section",26)(44,"p",27),ie(45),ne(),K(46,"div",28)(47,"a",29),it(),K(48,"svg",30),st(49,"path",31)(50,"polyline",32)(51,"line",33),ne(),ie(52," 3D Artist Resume "),ne(),Pt(),K(53,"a",29),it(),K(54,"svg",30),st(55,"path",31)(56,"polyline",32)(57,"line",33),ne(),ie(58," Full Stack Resume "),ne(),Pt(),K(59,"a",34),it(),K(60,"svg",30),st(61,"path",35)(62,"path",36),ne(),ie(63," GitHub "),ne(),Pt(),K(64,"a",37),it(),K(65,"svg",30),st(66,"rect",38)(67,"path",39),ne(),ie(68," Get in Touch "),ne()()()()),t&2&&(te(5),je(n.content.hero.name),te(2),je(n.content.about.tagline),te(2),je(n.content.about.intro),te(2),je(n.content.quickNote),te(2),Xt(n.content.hero.tags),te(9),Xt(n.content.experience),te(10),Xt(n.content.skills),te(9),Xt(n.content.education),te(4),je(n.content.closingNote),te(2),Dt("href",n.content.contact.resumes.artist3d,Vt),te(6),Dt("href",n.content.contact.resumes.fullstack,Vt),te(6),Dt("href",n.content.contact.github.url,Vt),te(5),Dt("href","mailto:"+n.content.contact.email,Vt))},styles:['.about-page[_ngcontent-%COMP%]{max-width:var(--content-max);margin:0 auto;padding:4rem var(--content-pad-x) 6rem}.section-label[_ngcontent-%COMP%]{display:inline-block;font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.15em;color:var(--color-spicy-paprika);margin-bottom:1.25rem}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.15em;color:var(--text-tertiary);margin:0 0 2rem}.section-icon[_ngcontent-%COMP%]{width:.9rem;height:.9rem;flex-shrink:0}.about-intro[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:4rem;border-bottom:1px solid var(--border);margin-bottom:4rem;max-width:48rem}.about-name[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;color:var(--text-primary);line-height:1.1;margin:0 0 .625rem}.about-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500;color:var(--text-accent);margin:0 0 1.75rem}.about-headline[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.8;color:var(--text-secondary);margin:0 0 1.25rem}.about-note[_ngcontent-%COMP%]{font-size:.85rem;line-height:1.75;color:var(--text-tertiary);font-style:italic;margin:0 0 2rem}.about-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.tag[_ngcontent-%COMP%]{font-size:.7rem;padding:.3rem .75rem;border-radius:9999px;border:1px solid var(--border);color:var(--text-tertiary);letter-spacing:.06em}.about-section[_ngcontent-%COMP%]{margin-bottom:4rem;padding-bottom:4rem;border-bottom:1px solid var(--border)}.exp-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2.5rem}.exp-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.exp-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap}.exp-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.exp-company[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--text-primary)}.exp-role[_ngcontent-%COMP%]{font-size:.82rem;color:var(--color-spicy-paprika);font-weight:500}.exp-period[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);white-space:nowrap;padding-top:.2rem;letter-spacing:.04em}.exp-desc[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem}.exp-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.85rem;line-height:1.75;color:var(--text-secondary);padding-left:1rem;position:relative}.exp-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2013";position:absolute;left:0;color:var(--text-ghost)}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(18rem,1fr));gap:1.25rem}.skill-card[_ngcontent-%COMP%]{background:var(--surface-card);border:1px solid var(--border);border-radius:var(--section-card-radius);padding:1.5rem;display:flex;flex-direction:column;gap:.75rem;transition:border-color .15s}.skill-card[_ngcontent-%COMP%]:hover{border-color:color-mix(in srgb,var(--color-spicy-paprika) 30%,transparent)}.skill-title[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600;color:var(--text-primary);margin:0}.skill-desc[_ngcontent-%COMP%]{font-size:.8rem;line-height:1.7;color:var(--text-tertiary);margin:0}.skill-tools[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.375rem;margin-top:auto;padding-top:.5rem}.skill-tool[_ngcontent-%COMP%]{font-size:.68rem;padding:.2rem .6rem;border-radius:.25rem;background:color-mix(in srgb,var(--color-spicy-paprika) 12%,transparent);color:var(--color-spicy-paprika);font-weight:500;letter-spacing:.04em}.edu-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.edu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border-subtle);flex-wrap:wrap}.edu-item[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.edu-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.edu-institution[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;color:var(--text-primary)}.edu-degree[_ngcontent-%COMP%]{font-size:.82rem;color:var(--text-tertiary)}.edu-period[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);white-space:nowrap;padding-top:.2rem}.about-closing[_ngcontent-%COMP%]{max-width:var(--section-intro-max);display:flex;flex-direction:column;gap:2rem}.closing-note[_ngcontent-%COMP%]{font-size:1.05rem;line-height:1.8;color:var(--text-secondary);margin:0;font-style:italic}.closing-ctas[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.875rem}.cta-primary[_ngcontent-%COMP%], .cta-secondary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:var(--section-control-radius);font-size:.875rem;text-decoration:none;transition:background .15s,border-color .15s}.cta-resume[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:var(--section-control-radius);font-size:.875rem;text-decoration:none;background:var(--color-spicy-paprika);color:#fff;font-weight:500;transition:background .15s}.cta-resume[_ngcontent-%COMP%]:hover{background:var(--color-tomato)}.cta-primary[_ngcontent-%COMP%]{background:var(--color-spicy-paprika);color:#fff;font-weight:500}.cta-primary[_ngcontent-%COMP%]:hover{background:var(--color-tomato)}.cta-secondary[_ngcontent-%COMP%]{border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 40%,transparent);color:var(--text-accent)}.cta-secondary[_ngcontent-%COMP%]:hover{border-color:var(--color-spicy-paprika)}.cta-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;flex-shrink:0}@media(max-width:640px){.about-page[_ngcontent-%COMP%]{padding:2.5rem var(--content-pad-x-mobile) 5rem}.skills-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.exp-header[_ngcontent-%COMP%]{flex-direction:column;gap:.25rem}}']})};var Wa=class i{content=Zn;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-contact"]],decls:72,vars:10,consts:[[1,"contact-page"],[1,"contact-intro"],[1,"section-label"],[1,"contact-heading"],[1,"contact-sub"],[1,"contact-grid"],[1,"contact-card","contact-card--primary",3,"href"],[1,"card-icon"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["x","2","y","4","width","20","height","16","rx","2"],["d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],[1,"card-body"],[1,"card-label"],[1,"card-value"],[1,"card-cta"],["target","_blank","rel","noopener",1,"contact-card",3,"href"],["d","M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"],["d","M9 18c-4.51 2-5-2-7-2"],[1,"contact-card",3,"href"],["width","14","height","20","x","5","y","2","rx","2","ry","2"],["d","M12 18h.01"],["d","M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.97 3.4 2 2 0 0 1 3.96 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"],[1,"contact-card","contact-card--muted"],["d","M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"],["cx","12","cy","10","r","3"],[1,"card-meta"],[1,"contact-note"],[1,"availability-dot"]],template:function(t,n){t&1&&(K(0,"div",0)(1,"section",1)(2,"span",2),ie(3,"Contact"),ne(),K(4,"h1",3),ie(5,"Let's work together."),ne(),K(6,"p",4),ie(7,"I'm open to full-time roles, freelance work, and collaborations across 3D visualization, full stack development, and automation systems."),ne()(),K(8,"div",5)(9,"a",6)(10,"div",7),it(),K(11,"svg",8),st(12,"rect",9)(13,"path",10),ne()(),Pt(),K(14,"div",11)(15,"span",12),ie(16,"Email"),ne(),K(17,"span",13),ie(18),ne(),K(19,"span",14),ie(20,"Send a message \u2192"),ne()()(),K(21,"a",15)(22,"div",7),it(),K(23,"svg",8),st(24,"path",16)(25,"path",17),ne()(),Pt(),K(26,"div",11)(27,"span",12),ie(28,"GitHub"),ne(),K(29,"span",13),ie(30),ne(),K(31,"span",14),ie(32,"View repositories \u2192"),ne()()(),K(33,"a",18)(34,"div",7),it(),K(35,"svg",8),st(36,"rect",19)(37,"path",20),ne()(),Pt(),K(38,"div",11)(39,"span",12),ie(40,"Mobile"),ne(),K(41,"span",13),ie(42),ne(),K(43,"span",14),ie(44,"Call or text \u2192"),ne()()(),K(45,"a",18)(46,"div",7),it(),K(47,"svg",8),st(48,"path",21),ne()(),Pt(),K(49,"div",11)(50,"span",12),ie(51,"Telephone"),ne(),K(52,"span",13),ie(53),ne(),K(54,"span",14),ie(55,"Call \u2192"),ne()()(),K(56,"div",22)(57,"div",7),it(),K(58,"svg",8),st(59,"path",23)(60,"circle",24),ne()(),Pt(),K(61,"div",11)(62,"span",12),ie(63,"Location"),ne(),K(64,"span",13),ie(65),ne(),K(66,"span",25),ie(67),ne()()()(),K(68,"div",26),st(69,"span",27),K(70,"span"),ie(71,"Available for opportunities \u2014 response time is usually within a day."),ne()()()),t&2&&(te(9),Dt("href","mailto:"+n.content.contact.email,Vt),te(9),je(n.content.contact.email),te(3),Dt("href",n.content.contact.github.url,Vt),te(9),je(n.content.contact.github.username),te(3),Dt("href",n.content.contact.phone.mobileHref,Vt),te(9),je(n.content.contact.phone.mobile),te(3),Dt("href",n.content.contact.phone.telephoneHref,Vt),te(8),je(n.content.contact.phone.telephone),te(12),je(n.content.contact.location.city),te(2),Ni("",n.content.contact.location.country," \xB7 Open to remote"))},styles:[".contact-page[_ngcontent-%COMP%]{max-width:var(--content-max);margin:0 auto;padding:4rem var(--content-pad-x) 6rem}.section-label[_ngcontent-%COMP%]{display:inline-block;font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.15em;color:var(--color-spicy-paprika);margin-bottom:1.25rem}.contact-intro[_ngcontent-%COMP%]{max-width:var(--section-intro-max);margin-bottom:3.5rem}.contact-heading[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;color:var(--text-primary);line-height:1.1;margin:0 0 1rem}.contact-sub[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.8;color:var(--text-secondary);margin:0}.contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(18rem,1fr));gap:1.25rem;margin-bottom:3rem}.contact-card[_ngcontent-%COMP%]{display:flex;gap:1.25rem;align-items:flex-start;padding:1.75rem;border-radius:var(--section-card-radius);border:1px solid var(--border);background:var(--surface-card);text-decoration:none;transition:border-color .15s,background .15s}.contact-card[_ngcontent-%COMP%]:hover{border-color:color-mix(in srgb,var(--color-spicy-paprika) 40%,transparent);background:color-mix(in srgb,var(--color-spicy-paprika) 4%,transparent)}.contact-card--primary[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--color-spicy-paprika) 25%,transparent)}.contact-card--muted[_ngcontent-%COMP%]{cursor:default}.contact-card--muted[_ngcontent-%COMP%]:hover{border-color:var(--border);background:var(--surface-card)}.card-icon[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;flex-shrink:0;border-radius:.5rem;background:color-mix(in srgb,var(--color-spicy-paprika) 12%,transparent);display:flex;align-items:center;justify-content:center;color:var(--color-spicy-paprika)}.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.1rem;height:1.1rem}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;min-width:0}.card-label[_ngcontent-%COMP%]{font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--text-ghost)}.card-value[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--text-primary);word-break:break-all}.card-cta[_ngcontent-%COMP%]{font-size:.78rem;color:var(--color-spicy-paprika);margin-top:.25rem}.card-meta[_ngcontent-%COMP%]{font-size:.78rem;color:var(--text-tertiary);margin-top:.25rem}.contact-note[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;font-size:.8rem;color:var(--text-tertiary)}.availability-dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:9999px;background:color-mix(in srgb,#4ade80 calc(100% - var(--theme-mix)),#16a34a var(--theme-mix));flex-shrink:0;animation:_ngcontent-%COMP%_pulse 2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.4}}@media(max-width:640px){.contact-page[_ngcontent-%COMP%]{padding:2.5rem var(--content-pad-x-mobile) 5rem}.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};function ev(i,e){if(i&1){let t=Ln();we(0,"div",7)(1,"span",12),ie(2,"runtime waiting"),De(),we(3,"button",13),en("click",function(){gt(t);let r=Le();return _t(r.loadLab())}),it(),we(4,"svg",14),bt(5,"path",15)(6,"circle",16),De(),ie(7," Press To Start "),De()()}}function tv(i,e){if(i&1){let t=Ln();we(0,"div",8)(1,"span",17),ie(2,"3D Lab Runtime"),De(),we(3,"button",18),en("click",function(){gt(t);let r=Le();return _t(r.unloadLab())}),ie(4,"Unload"),De()()}}function nv(i,e){i&1&&(we(0,"div",9),bt(1,"app-scene"),De())}var eh=class i{host=dn(Fi);platformId=dn(di);sectionSvc=dn($c);observer;observedSections=[];onScrollRef=()=>this.requestSync();onResizeRef=()=>this.requestSync();rafId=null;labCenterTimeout=null;labLoaded=mt(!1);visibleSections=mt({});activeSection=this.sectionSvc.active;loadLab(){this.labLoaded.set(!0),$n(this.platformId)&&(this.labCenterTimeout=setTimeout(()=>this.centerLabSection(),120))}unloadLab(){this.labLoaded.set(!1)}isVisible(e){return!!this.visibleSections()[e]}ngAfterViewInit(){if(!$n(this.platformId))return;let e=Array.from(this.host.nativeElement.querySelectorAll("[data-spy-section]"));this.observedSections=e,this.observer=new IntersectionObserver(t=>{this.visibleSections.update(n=>{let r=Tt({},n);for(let s of t){let o=s.target.id;o&&(r[o]=s.isIntersecting)}return r}),this.requestSync()},{root:null,rootMargin:"-20% 0px -65% 0px",threshold:[.1,.2,.35,.5,.7]}),e.forEach(t=>this.observer?.observe(t)),window.addEventListener("scroll",this.onScrollRef,{passive:!0}),window.addEventListener("resize",this.onResizeRef,{passive:!0}),this.syncActiveFromViewport()}ngOnDestroy(){this.observer?.disconnect(),window.removeEventListener("scroll",this.onScrollRef),window.removeEventListener("resize",this.onResizeRef),this.rafId!==null&&cancelAnimationFrame(this.rafId),this.labCenterTimeout&&clearTimeout(this.labCenterTimeout)}requestSync(){this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null,this.syncActiveFromViewport()}))}syncActiveFromViewport(){if(!this.observedSections.length)return;let e=100,t=window.scrollY+e+window.innerHeight*.28,n=this.sectionSvc.active(),r={},s=this.observedSections[0],o=this.observedSections[this.observedSections.length-1],a=!1;for(let l of this.observedSections){let c=l.getBoundingClientRect(),f=c.bottom>e+20&&c.top<window.innerHeight*.92;r[l.id]=f;let p=l.offsetTop,u=p+l.offsetHeight;t>=p&&t<u&&(n=l.id,a=!0)}a||(t<s.offsetTop&&(n=s.id),t>=o.offsetTop&&(n=o.id)),this.visibleSections.set(r),this.sectionSvc.active.set(n)}centerLabSection(){let e=this.host.nativeElement.querySelector("#lab"),t=this.host.nativeElement.querySelector(".lab-scene-shell");if(!e||!t)return;let n=88,r=t.getBoundingClientRect(),o=r.top+window.scrollY-Math.max(n,(window.innerHeight-r.height)/2);window.scrollTo({top:Math.max(e.offsetTop-n,o),behavior:"smooth"})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=rn({type:i,selectors:[["app-shell"]],decls:18,vars:32,consts:[["id","home","data-spy-section","","aria-label","Home",1,"shell-section","shell-section--home","focus-shell"],["id","portfolio","data-spy-section","","aria-label","Portfolio",1,"shell-section","shell-section--portfolio","focus-shell"],["id","lab","data-spy-section","","aria-label","Lab",1,"shell-section","shell-section--lab","focus-shell"],[1,"lab-shell"],[1,"lab-shell-intro"],[1,"lab-shell-section-label"],[1,"lab-shell-heading"],[1,"lab-start-cue"],[1,"lab-shell-toolbar"],[1,"lab-scene-shell"],["id","about","data-spy-section","","aria-label","About",1,"shell-section","shell-section--about","focus-shell"],["id","contact","data-spy-section","","aria-label","Contact",1,"shell-section","shell-section--contact","focus-shell"],[1,"lab-start-whisper"],["type","button",1,"lab-start-btn",3,"click"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.7","stroke-linecap","round","stroke-linejoin","round","aria-hidden","true",1,"lab-start-icon"],["d","M8 5v14l11-7z"],["cx","12","cy","12","r","9"],[1,"lab-shell-label"],["type","button",1,"lab-shell-btn","lab-shell-btn--danger",3,"click"]],template:function(t,n){t&1&&(we(0,"section",0),bt(1,"app-home"),De(),we(2,"section",1),bt(3,"app-portfolio"),De(),we(4,"section",2)(5,"div",3)(6,"div",4)(7,"span",5),ie(8,"Lab"),De(),we(9,"h1",6),ie(10,"Interactive Runtime Sandbox"),De()(),Kt(11,ev,8,0,"div",7)(12,tv,5,0,"div",8),De(),Kt(13,nv,2,0,"div",9),De(),we(14,"section",10),bt(15,"app-about"),De(),we(16,"section",11),bt(17,"app-contact"),De()),t&2&&(kt("is-active-section",n.activeSection()==="home")("is-visible-section",n.isVisible("home"))("is-muted-section",n.activeSection()!=="home"),te(2),kt("is-active-section",n.activeSection()==="portfolio")("is-visible-section",n.isVisible("portfolio"))("is-muted-section",n.activeSection()!=="portfolio"),te(2),kt("is-active-section",n.activeSection()==="lab")("is-visible-section",n.isVisible("lab"))("is-muted-section",n.activeSection()!=="lab"),te(7),Qt(n.labLoaded()?12:11),te(2),Qt(n.labLoaded()?13:-1),te(),kt("is-active-section",n.activeSection()==="about")("is-visible-section",n.isVisible("about"))("is-muted-section",n.activeSection()!=="about"),te(2),kt("is-active-section",n.activeSection()==="contact")("is-visible-section",n.isVisible("contact"))("is-muted-section",n.activeSection()!=="contact"))},dependencies:[Fa,La,Ga,Ha,Wa],styles:['[_nghost-%COMP%]{--nav-height: 88px;--section-peek: clamp(5rem, 12vh, 8rem);--section-break: clamp(3rem, 8vh, 6rem);--section-enter-duration: .32s;--section-enter-ease: cubic-bezier(.16, 1, .3, 1);--focus-reveal-duration: .36s;--focus-reveal-ease: cubic-bezier(.16, 1, .3, 1);--focus-muted-contrast: .92;--section-active-opacity: 1;--section-visible-opacity: .72;--section-muted-opacity: .46;--section-active-y: 0;--section-visible-y: 6px;--section-muted-y: 12px;--section-active-scale: 1;--section-visible-scale: .994;--section-muted-scale: .988;--section-active-blur: 0px;--section-visible-blur: 0px;--section-muted-blur: 1.1px;display:block}.shell-section[_ngcontent-%COMP%]{position:relative;min-height:calc(100svh - var(--nav-height) - var(--section-peek));padding-block:var(--section-break);scroll-margin-top:var(--nav-height);opacity:var(--section-muted-opacity);transform:translateY(var(--section-muted-y)) scale(var(--section-muted-scale));filter:blur(var(--section-muted-blur));transition:opacity var(--section-enter-duration) var(--section-enter-ease),transform var(--section-enter-duration) var(--section-enter-ease),filter var(--section-enter-duration) var(--section-enter-ease);will-change:opacity,transform,filter}.shell-section.is-visible-section[_ngcontent-%COMP%]{opacity:var(--section-visible-opacity);transform:translateY(var(--section-visible-y)) scale(var(--section-visible-scale));filter:blur(var(--section-visible-blur))}.shell-section.is-active-section[_ngcontent-%COMP%]{opacity:var(--section-active-opacity);transform:translateY(var(--section-active-y)) scale(var(--section-active-scale));filter:blur(var(--section-active-blur))}.focus-shell[_ngcontent-%COMP%]   :is(.hero-name[_ngcontent-%COMP%], .portfolio-heading[_ngcontent-%COMP%], .about-name[_ngcontent-%COMP%], .contact-heading[_ngcontent-%COMP%], .lab-shell-heading[_ngcontent-%COMP%]){opacity:.58;transform:translateY(8px);transition:opacity var(--focus-reveal-duration) var(--focus-reveal-ease),transform var(--focus-reveal-duration) var(--focus-reveal-ease)}.focus-shell[_ngcontent-%COMP%]   :is(.hero-headline[_ngcontent-%COMP%], .portfolio-sub[_ngcontent-%COMP%], .about-headline[_ngcontent-%COMP%], .contact-sub[_ngcontent-%COMP%], .engine-desc[_ngcontent-%COMP%], .closing-note[_ngcontent-%COMP%]){opacity:.52;transform:translateY(10px);transition:opacity var(--focus-reveal-duration) var(--focus-reveal-ease),transform var(--focus-reveal-duration) var(--focus-reveal-ease);transition-delay:55ms}.focus-shell[_ngcontent-%COMP%]   :is(.photo-card[_ngcontent-%COMP%], .portfolio-grid[_ngcontent-%COMP%], .skills-grid[_ngcontent-%COMP%], .contact-grid[_ngcontent-%COMP%], .engine-card[_ngcontent-%COMP%], .cert-gallery[_ngcontent-%COMP%], .exp-list[_ngcontent-%COMP%], .edu-list[_ngcontent-%COMP%], .lab-scene-shell[_ngcontent-%COMP%]){opacity:.48;transform:translateY(12px);transition:opacity var(--focus-reveal-duration) var(--focus-reveal-ease),transform var(--focus-reveal-duration) var(--focus-reveal-ease);transition-delay:95ms}.focus-shell[_ngcontent-%COMP%]   :is(.hero-ctas[_ngcontent-%COMP%], .about-tags[_ngcontent-%COMP%], .engine-tags[_ngcontent-%COMP%], .closing-ctas[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%], .contact-note[_ngcontent-%COMP%], .lab-shell-toolbar[_ngcontent-%COMP%], .lab-start-cue[_ngcontent-%COMP%], .lab-start-btn[_ngcontent-%COMP%]){opacity:.46;transform:translateY(14px);transition:opacity var(--focus-reveal-duration) var(--focus-reveal-ease),transform var(--focus-reveal-duration) var(--focus-reveal-ease);transition-delay:.14s}.focus-shell.is-active-section[_ngcontent-%COMP%]   :is(.hero-name[_ngcontent-%COMP%], .portfolio-heading[_ngcontent-%COMP%], .about-name[_ngcontent-%COMP%], .contact-heading[_ngcontent-%COMP%], .lab-shell-heading[_ngcontent-%COMP%], .hero-headline[_ngcontent-%COMP%], .portfolio-sub[_ngcontent-%COMP%], .about-headline[_ngcontent-%COMP%], .contact-sub[_ngcontent-%COMP%], .engine-desc[_ngcontent-%COMP%], .closing-note[_ngcontent-%COMP%], .photo-card[_ngcontent-%COMP%], .portfolio-grid[_ngcontent-%COMP%], .skills-grid[_ngcontent-%COMP%], .contact-grid[_ngcontent-%COMP%], .engine-card[_ngcontent-%COMP%], .cert-gallery[_ngcontent-%COMP%], .exp-list[_ngcontent-%COMP%], .edu-list[_ngcontent-%COMP%], .lab-scene-shell[_ngcontent-%COMP%], .hero-ctas[_ngcontent-%COMP%], .about-tags[_ngcontent-%COMP%], .engine-tags[_ngcontent-%COMP%], .closing-ctas[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%], .contact-note[_ngcontent-%COMP%], .lab-shell-toolbar[_ngcontent-%COMP%], .lab-start-cue[_ngcontent-%COMP%], .lab-start-btn[_ngcontent-%COMP%]){opacity:1;transform:translateY(0)}.focus-shell.is-muted-section[_ngcontent-%COMP%]   :is(.hero-name[_ngcontent-%COMP%], .portfolio-heading[_ngcontent-%COMP%], .about-name[_ngcontent-%COMP%], .contact-heading[_ngcontent-%COMP%], .lab-shell-heading[_ngcontent-%COMP%], .hero-headline[_ngcontent-%COMP%], .portfolio-sub[_ngcontent-%COMP%], .about-headline[_ngcontent-%COMP%], .contact-sub[_ngcontent-%COMP%], .engine-desc[_ngcontent-%COMP%], .closing-note[_ngcontent-%COMP%], .photo-card[_ngcontent-%COMP%], .portfolio-grid[_ngcontent-%COMP%], .skills-grid[_ngcontent-%COMP%], .contact-grid[_ngcontent-%COMP%], .engine-card[_ngcontent-%COMP%], .cert-gallery[_ngcontent-%COMP%], .exp-list[_ngcontent-%COMP%], .edu-list[_ngcontent-%COMP%], .lab-scene-shell[_ngcontent-%COMP%], .hero-ctas[_ngcontent-%COMP%], .about-tags[_ngcontent-%COMP%], .engine-tags[_ngcontent-%COMP%], .closing-ctas[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%], .contact-note[_ngcontent-%COMP%], .lab-shell-toolbar[_ngcontent-%COMP%], .lab-start-cue[_ngcontent-%COMP%], .lab-start-btn[_ngcontent-%COMP%]){filter:contrast(var(--focus-muted-contrast))}.shell-section[_ngcontent-%COMP%] + .shell-section[_ngcontent-%COMP%]{border-top:1px solid var(--border-subtle)}.shell-section--home[_ngcontent-%COMP%], .shell-section--lab[_ngcontent-%COMP%]{min-height:calc(100svh - var(--nav-height) - var(--section-peek))}.shell-section--lab[_ngcontent-%COMP%]   app-scene[_ngcontent-%COMP%]{display:block;min-height:inherit}.lab-scene-shell[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_lab-scene-enter .32s cubic-bezier(.16,1,.3,1);transform-origin:top center}@keyframes _ngcontent-%COMP%_lab-scene-enter{0%{opacity:0;transform:translateY(10px) scale(.995);filter:saturate(.9)}to{opacity:1;transform:translateY(0) scale(1);filter:saturate(1)}}.lab-shell[_ngcontent-%COMP%]{max-width:var(--content-max);margin:0 auto 1rem;padding:0 var(--content-pad-x)}.lab-shell-intro[_ngcontent-%COMP%]{max-width:var(--section-intro-max);margin-bottom:2.5rem}.lab-shell-section-label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:1.25rem;font-size:.65rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--color-spicy-paprika)}.lab-shell-heading[_ngcontent-%COMP%]{margin:0;font-size:clamp(2rem,4vw,3rem);font-weight:700;line-height:1.1;color:var(--text-primary)}.lab-shell-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.9rem}.lab-shell-label[_ngcontent-%COMP%]{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-tertiary)}.lab-shell-btn[_ngcontent-%COMP%]{border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 50%,var(--border));background:transparent;color:var(--color-spicy-paprika);border-radius:var(--section-control-radius);padding:.45rem .75rem;font-size:.78rem;font-weight:600;cursor:pointer}.lab-shell-btn--danger[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--color-tomato) 55%,var(--border));color:var(--color-tomato)}.lab-start-btn[_ngcontent-%COMP%]{width:auto;min-height:0;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;margin:0;padding:.75rem 1.4rem;border-radius:var(--section-control-radius);border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 45%,transparent);background:transparent;color:var(--text-accent);font-size:.88rem;font-weight:600;letter-spacing:.03em;cursor:pointer;transition:border-color .15s ease,color .15s ease,background-color .15s ease,transform .15s ease}.lab-start-cue[_ngcontent-%COMP%]{position:relative;display:inline-flex;flex-direction:column;align-items:center;align-self:center;gap:.55rem}.lab-start-cue[_ngcontent-%COMP%]:before, .lab-start-cue[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:1.85rem -1.1rem -.55rem;border:1px solid color-mix(in srgb,var(--color-spicy-paprika) 28%,transparent);border-radius:calc(var(--section-control-radius) + .45rem);pointer-events:none;animation:_ngcontent-%COMP%_lab-start-signal 2.4s ease-in-out infinite}.lab-start-cue[_ngcontent-%COMP%]:after{inset:1.45rem -1.65rem -.95rem;opacity:.45;animation-delay:.28s}.lab-start-whisper[_ngcontent-%COMP%]{color:var(--text-tertiary);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase}.lab-shell[_ngcontent-%COMP%]:has(.lab-start-cue){display:flex;flex-direction:column}.lab-shell[_ngcontent-%COMP%]:has(.lab-start-cue)   .lab-start-cue[_ngcontent-%COMP%]{align-self:center}.lab-start-icon[_ngcontent-%COMP%]{width:1rem;height:1rem}.lab-start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px);border-color:var(--color-spicy-paprika);color:var(--color-spicy-paprika);background:color-mix(in srgb,var(--color-spicy-paprika) 8%,transparent)}@keyframes _ngcontent-%COMP%_lab-start-signal{0%,to{opacity:.22;transform:scale(.98)}50%{opacity:.72;transform:scale(1.015)}}.spy-anchor[_ngcontent-%COMP%]{scroll-margin-top:calc(var(--nav-height) + 12px)}@media(max-width:640px){[_nghost-%COMP%]{--section-peek: clamp(3rem, 8vh, 5rem);--section-break: clamp(2rem, 6vh, 3.5rem);--section-muted-opacity: .72;--section-muted-blur: 0px}.lab-shell[_ngcontent-%COMP%]{padding:0 var(--content-pad-x-mobile)}.lab-shell-intro[_ngcontent-%COMP%]{margin-bottom:1.5rem}.lab-shell-toolbar[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}}@media(prefers-reduced-motion:reduce){.shell-section[_ngcontent-%COMP%]{transition:none;transform:none;filter:none;opacity:1}.focus-shell[_ngcontent-%COMP%]   :is(.hero-name[_ngcontent-%COMP%], .portfolio-heading[_ngcontent-%COMP%], .about-name[_ngcontent-%COMP%], .contact-heading[_ngcontent-%COMP%], .lab-shell-heading[_ngcontent-%COMP%], .hero-headline[_ngcontent-%COMP%], .portfolio-sub[_ngcontent-%COMP%], .about-headline[_ngcontent-%COMP%], .contact-sub[_ngcontent-%COMP%], .engine-desc[_ngcontent-%COMP%], .closing-note[_ngcontent-%COMP%], .photo-card[_ngcontent-%COMP%], .portfolio-grid[_ngcontent-%COMP%], .skills-grid[_ngcontent-%COMP%], .contact-grid[_ngcontent-%COMP%], .engine-card[_ngcontent-%COMP%], .cert-gallery[_ngcontent-%COMP%], .exp-list[_ngcontent-%COMP%], .edu-list[_ngcontent-%COMP%], .lab-scene-shell[_ngcontent-%COMP%], .hero-ctas[_ngcontent-%COMP%], .about-tags[_ngcontent-%COMP%], .engine-tags[_ngcontent-%COMP%], .closing-ctas[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%], .contact-note[_ngcontent-%COMP%], .lab-shell-toolbar[_ngcontent-%COMP%], .lab-start-cue[_ngcontent-%COMP%], .lab-start-btn[_ngcontent-%COMP%]){opacity:1;transform:none;filter:none;transition:none}.lab-scene-shell[_ngcontent-%COMP%]{animation:none}.lab-start-cue[_ngcontent-%COMP%]:before, .lab-start-cue[_ngcontent-%COMP%]:after{animation:none}}']})};export{eh as Shell};
