"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function StarField() {
  const points = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const N = 1500;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.3) * 40;
      pos[i * 3 + 2] = -Math.random() * 60;
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  const mat = useMemo(() => new THREE.PointsMaterial({ size: 0.06, color: "#a3d5ff", transparent: true, opacity: 0.8 }), []);
  useFrame((_s, dt) => {
    if (!points.current) return;
    points.current.rotation.z += dt * 0.01;
  });
  return <primitive ref={points} object={new THREE.Points(geom, mat)} />;
}

function AuroraPlane() {
  const mesh = useRef<THREE.Mesh>(null);
  const uniformRef = useRef<{ time: { value: number } }>({ time: { value: 0 } });
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec2 vUv; 
          void main() {
            vUv = uv;
            vec3 p = position;
            p.y += sin((uv.x + uv.y) * 6.283 + 3.1415) * 0.25;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          varying vec2 vUv; 
          uniform float time;
          float noise(vec2 p){
            return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123);
          }
          float smoothNoise(vec2 p){
            vec2 i=floor(p), f=fract(p);
            float a=noise(i), b=noise(i+vec2(1.,0.));
            float c=noise(i+vec2(0.,1.)), d=noise(i+vec2(1.,1.));
            vec2 u=f*f*(3.-2.*f);
            return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
          }
          void main(){
            vec2 uv = vUv * 3.0;
            float n = smoothNoise(uv + vec2(0.0, time*0.05));
            float band = smoothstep(0.35, 0.7, n);
            vec3 col = mix(vec3(0.0,0.2,0.45), vec3(0.0,0.94,0.5), band);
            col += vec3(0.2,0.3,0.6) * smoothstep(0.8,1.0,n);
            gl_FragColor = vec4(col, 0.35);
          }
        `
      }),
    []
  );
  // @ts-ignore
  uniformRef.current = mat.uniforms as any;
  useFrame((_s, dt) => {
    // @ts-ignore
    uniformRef.current.time.value += dt;
    if (mesh.current) {
      mesh.current.position.y = -1.2 + Math.sin(performance.now() * 0.0002) * 0.05;
    }
  });
  return (
    <mesh ref={mesh} position={[0, -1.2, -6]}>
      <planeGeometry args={[20, 8, 64, 64]} />
      <primitive object={mat} attach="material" />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Image texture base for authenticity */}
      <img
        src="/bg-aurora.jpg"
        alt="Aurora Starry Background"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={0.25} />
        <StarField />
        <AuroraPlane />
      </Canvas>
      <div className="readable-gradient" />
    </div>
  );
}
