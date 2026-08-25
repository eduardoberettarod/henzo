import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model3D() {
  const modelRef = useRef()
  const modelPath = `${import.meta.env.BASE_URL}pumping_heart_model.glb`
  const { scene } = useGLTF(modelPath)

  scene.traverse((object) => {
    if (object.isMesh) {
      object.material = new THREE.MeshStandardMaterial({
        color: '#cc0a0a',
        roughness: 0.45,
        metalness: 0.05,
      })
    }
  })

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, 0.8, 0]}
      scale={0.01}
    />
  )
}