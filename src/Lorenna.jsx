import { Suspense } from 'react'
import { useState } from 'react'
import './style/global.css'
import { Canvas } from '@react-three/fiber'
import Model3D from './components/Model3D'

import Loader from './components/Loader/Loader'
import Card from './components/Card/Card';
import Button from './components/Button/Button';

export default function Lorenna() {
  const [loader, setLoader] = useState(true)

  return (
    <section id="lorenna">
      {loader && (
        <Loader
          setLoader={setLoader}
          first="Welcome"
          second="Lorenna"
        />
      )}

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Model3D />
        </Suspense>
      </Canvas>

      <Card>

        <div className='text-center mb-4'>
          <span className='title'>
            Aceita sair comigo?
          </span>
        </div>

        <div className='button-group'>
          <Button>SIM!</Button>
          <Button>NÃO</Button>
        </div>
      </Card>
    </section>
  )
}
