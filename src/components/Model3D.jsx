import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Model3D() {
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

  return (
    <>
      <primitive
        object={scene}
        position={[0, 0.8, 0]}
        scale={0.01}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}

        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}

        autoRotate
        autoRotateSpeed={8}

        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}