"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere() {
  const mesh = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere
        ref={mesh}
        args={[1, 100, 200]}
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl flex items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-60"></div>
      </div>
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <AnimatedSphere />
      <Environment preset="city" />
    </Canvas>
  )
}
