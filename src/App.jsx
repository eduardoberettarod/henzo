import { useState } from 'react'
import Loader from './components/Loader/Loader'
import './style/global.css'
import InputHome from './components/InputHome/InputHome';
import Lorenna from './Lorenna'

export function App() {
  const [loader, setLoader] = useState(true)
  const [showLorenna, setShowLorenna] = useState(false)

  function handlePasswordChange(value) {
    if (value === '10032023') {
      setShowLorenna(true)
    }
  }

  if (showLorenna) {
    return <Lorenna />
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