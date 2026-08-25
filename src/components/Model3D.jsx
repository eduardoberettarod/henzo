import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model3D() {
  const modelRef = useRef()
  const { scene } = useGLTF('/model.glb')

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
    />
  )
}