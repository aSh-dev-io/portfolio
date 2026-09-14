"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Workbench() {
  const pulse = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (pulse.current) pulse.current.position.x = -1.9 + ((state.clock.elapsedTime * 0.45) % 3.4); });
  return <group rotation={[-0.18, -0.28, 0]}>
    <mesh position={[0, -1.2, 0]}><boxGeometry args={[6.8, 0.18, 3.4]} /><meshStandardMaterial color="#101a21" metalness={0.8} roughness={0.42} /></mesh>
    <mesh position={[-1.5, -0.98, 0.15]} rotation={[0, 0, -0.04]}><boxGeometry args={[3.1, 0.12, 2.1]} /><meshStandardMaterial color="#123335" metalness={0.35} roughness={0.7} /></mesh>
    <Line points={[[-2.8, -0.88, 0.05], [-1.6, -0.88, 0.05], [-1.2, -0.88, 0.35], [0.2, -0.88, 0.35]]} color="#54e5dd" lineWidth={1} />
    <Line points={[[-2.7, -0.87, 0.65], [-2.0, -0.87, 0.65], [-1.6, -0.87, 0.1]]} color="#54e5dd" lineWidth={0.8} />
    <mesh ref={pulse} position={[-1.9, -0.82, 0.05]}><sphereGeometry args={[0.045, 10, 10]} /><meshBasicMaterial color="#b9fffa" /></mesh>
    <mesh position={[-1.5, -0.75, 0.2]}><boxGeometry args={[0.65, 0.24, 0.55]} /><meshStandardMaterial color="#1b252a" metalness={0.7} roughness={0.3} /></mesh>
    {[[-2.8, -0.7, -0.65], [-0.8, -0.7, -0.65], [-2.7, -0.7, 0.85], [-0.2, -0.7, 0.85]].map((p, i) => <mesh key={i} position={p as [number,number,number]}><cylinderGeometry args={[0.12, 0.12, 0.16, 12]} /><meshStandardMaterial color="#adbbb8" metalness={0.9} roughness={0.3} /></mesh>)}
    <group position={[1.7, 0.05, 0.25]}><mesh><boxGeometry args={[2.1, 1.65, 0.2]} /><meshStandardMaterial color="#182329" metalness={0.8} roughness={0.34} /></mesh><mesh position={[0, 0.05, 0.12]}><planeGeometry args={[1.65, 0.95]} /><meshStandardMaterial color="#0c3037" emissive="#1b7778" emissiveIntensity={0.35} /></mesh><Line points={[[-0.7, -0.05, 0.14], [-0.25, 0.3, 0.14], [0.15, -0.16, 0.14], [0.7, 0.22, 0.14]]} color="#7bf4e8" lineWidth={1.2} /></group>
    <mesh position={[0.45, -0.35, 0.45]} rotation={[0.25, 0, 0]}><boxGeometry args={[0.8, 0.62, 0.45]} /><meshStandardMaterial color="#273239" metalness={0.8} roughness={0.35} /></mesh>
  </group>;
}

function Scene() { return <Canvas dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }}><PerspectiveCamera makeDefault position={[0, 0.1, 7.8]} fov={38} /><ambientLight intensity={0.35} /><directionalLight position={[-3, 5, 4]} intensity={2.2} color="#d9ffff" /><pointLight position={[-2, 0, 2]} intensity={3} distance={8} color="#40d8d4" /><Float speed={0.35} rotationIntensity={0.04} floatIntensity={0.04}><Workbench /></Float><OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /></Canvas>; }

export default function EngineeringScene() { return <div className="engineering-scene" aria-hidden="true"><Scene /></div>; }

