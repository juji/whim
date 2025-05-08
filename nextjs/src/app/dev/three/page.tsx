'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function WobbleBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#7ec8e3" roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

export default function ThreeDevPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h1 className="text-2xl font-bold mb-4">Three.js Demo Blob</h1>
      <div style={{ width: 400, height: 300 }} className="rounded-lg shadow-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <WobbleBlob />
          <OrbitControls enablePan={false} enableZoom={true} />
        </Canvas>
      </div>
      <p className="mt-4 text-gray-500">A 3D blob rendered with Three.js (react-three-fiber).</p>
    </div>
  );
}