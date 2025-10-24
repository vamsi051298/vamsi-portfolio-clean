"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function StarField() {
  const points = useRef<THREE.Points>(null);
  
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#a3d5ff" />
      </mesh>
    </group>
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
      </Canvas>
      <div className="readable-gradient" />
    </div>
  );
}
