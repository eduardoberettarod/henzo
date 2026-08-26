import { useState } from 'react'
import Loader from './components/Loader/Loader'
import './style/global.css'
import InputHome from './components/InputHome/InputHome';
import Gabriele from './Gabriele'

export function App() {
  const [loader, setLoader] = useState(true)
  const [showGabriele, setShowGabriele] = useState(false)

  function handlePasswordChange(value) {
    if (value === '7121895125') {
      setShowGabriele(true)
    }
  }

  if (showGabriele) {
    return <Gabriele />
  }

  return (
    <>
      <section id="home">
        {loader && <Loader setLoader={setLoader}
          first={'Friends?'}
          second={'Lovers.'} /
        >}

        <div>
          <InputHome
            type={'password'}
            input_id={'senha'}
            label={'Senha'}
            onChange={handlePasswordChange}
          />
        </div>

      </section>
    </>
  )
}

export default App