'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.3
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    <TorusKnot args={[10, 3, 100, 16]} ref={meshRef}>
      <meshNormalMaterial />
    </TorusKnot>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedTorusKnot />
    </Canvas>
  )
}

