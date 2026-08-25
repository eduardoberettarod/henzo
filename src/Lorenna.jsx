import { Suspense, useState } from 'react'

import './style/global.css'

import { Canvas } from '@react-three/fiber'

import Model3D from './components/Model3D'

import Loader from './components/Loader/Loader'

import Card from './components/Card/Card'

import Button from './components/Button/Button'

export default function Lorenna() {
  const [loader, setLoader] = useState(true)

  const [activity, setActivity] = useState('')
  const [noButton, setNoButton] = useState(1)
  const [currentCard, setCurrentCard] = useState(0)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [food, setFood] = useState('')

  function handleNoClick() {
    setNoButton((prev) => Math.max(prev - 0.15, 0))
  }

  function nextCard() {
    setCurrentCard((prev) => prev + 1)
  }

  const foodOptions = [
    { value: 'hamburguer', label: 'Hambúrguer', icon: '🍔' },
    { value: 'pizza', label: 'Pizza', icon: '🍕' },
    { value: 'massas', label: 'Massas', icon: '🍝' },
    { value: 'sushi', label: 'Sushi', icon: '🍣' },
    { value: 'churrasco', label: 'Churrasco', icon: '🥩' },
    { value: 'sorvete', label: 'Sorvete', icon: '🍨' },
  ]

  const activityOptions = [
    { value: 'caminhada', label: 'Caminhada', icon: '🚶' },
    { value: 'academia', label: 'Academia', icon: '🏋️' },
    { value: 'cinema', label: 'Cinema', icon: '🎬' },
    { value: 'parque', label: 'Parque', icon: '🌳' },
    { value: 'boliche', label: 'Boliche', icon: '🎳' },
    { value: 'fliperama', label: 'Fliperama', icon: '🕹️' },
  ]

  // Encontra a opção de comida selecionada
  const selectedFood = foodOptions.find(
    (option) => option.value === food
  )

  // Encontra a atividade selecionada
  const selectedActivity = activityOptions.find(
    (option) => option.value === activity
  )

  // Formata a data para DD/MM/AAAA
  function formatDate(date) {
    if (!date) return ''

    const [year, month, day] = date.split('-')

    return `${day}/${month}/${year}`
  }

  function handleFinish() {
    const message = `
      Oii! Eu aceitei sair com você! 

      Data: ${formatDate(date)}
      Horário: ${time}
      Comida: ${selectedFood?.label}
      Atividade: ${selectedActivity?.label}

      Mal posso esperar, meu gatinho! 
        `

    const whatsappUrl = `https://wa.me/${import.meta.env.NUMBER}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

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
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Model3D />
        </Suspense>
      </Canvas>

      <Card>

        {/* CARD 0 */}

        {currentCard === 0 && (
          <>
            <div className="text-center mb-4">
              <span className="title">
                Aceita sair comigo?
              </span>
            </div>

            <div className="button-group">

              <Button onClick={nextCard}>
                SIM!
              </Button>

              {noButton > 0 && (
                <Button
                  onClick={handleNoClick}
                  style={{
                    transform: `scale(${noButton})`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  NÃO
                </Button>
              )}

            </div>
          </>
        )}

        {/* CARD 1 */}

        {currentCard === 1 && (
          <>
            <div className="text-center mb-4">
              <span className="title">
                Que bom que você aceitou!
              </span>
            </div>

            <p>
              tava com medo de você falar nãoKKKKKKKK
            </p>

            <Button onClick={nextCard}>
              PRÓXIMO
            </Button>
          </>
        )}

        {/* CARD 2 */}

        {currentCard === 2 && (
          <>
            <div className="text-center mb-4">
              <span className="title">
                Quando você está livre?
              </span>
            </div>

            <div className="input-group">

              <input
                className="input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                className="input"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

            </div>

            <Button
              onClick={nextCard}
              disabled={!date || !time}
            >
              Selecionar data
            </Button>
          </>
        )}

        {/* CARD 3 */}

        {currentCard === 3 && (
          <>
            <div className="text-center mb-4">
              <span className="title">
                O que você está com vontade de comer?
              </span>
            </div>

            <div className="food-options">

              {foodOptions.map((option) => (
                <label
                  key={option.value}
                  className={`food-option ${food === option.value
                    ? 'selected'
                    : ''
                    }`}
                >

                  <input
                    type="radio"
                    name="food"
                    value={option.value}
                    checked={food === option.value}
                    onChange={() => setFood(option.value)}
                  />

                  <span className="food-icon">
                    {option.icon}
                  </span>

                  <span className="food-label">
                    {option.label}
                  </span>

                </label>
              ))}

            </div>

            <Button
              onClick={nextCard}
              disabled={!food}
            >
              PRÓXIMO
            </Button>
          </>
        )}

        {/* CARD 4 */}

        {currentCard === 4 && (
          <>
            <div className="text-center mb-4">
              <span className="title">
                O que você gostaria de fazer?
              </span>
            </div>

            <div className="food-options">

              {activityOptions.map((option) => (
                <label
                  key={option.value}
                  className={`food-option ${activity === option.value
                    ? 'selected'
                    : ''
                    }`}
                >

                  <input
                    type="radio"
                    name="activity"
                    value={option.value}
                    checked={activity === option.value}
                    onChange={() => setActivity(option.value)}
                  />

                  <span className="food-icon">
                    {option.icon}
                  </span>

                  <span className="food-label">
                    {option.label}
                  </span>

                </label>
              ))}

            </div>

            <Button
              onClick={nextCard}
              disabled={!activity}
            >
              PRÓXIMO
            </Button>
          </>
        )}

        {/* CARD 5 */}

        {currentCard === 5 && (
          <>
            <div className="summary-header">
              <span className="summary-icon">
                💕
              </span>

              <div className="text-center">
                <span className="title">
                  Nosso encontro
                </span>

                <p className="summary-subtitle">
                  Então ficou combinado assim:
                </p>
              </div>
            </div>

            <div className="summary">

              <div className="summary-item">
                <span className="summary-item-icon">
                  📅
                </span>

                <div>
                  <span className="summary-label">
                    Data
                  </span>

                  <span className="summary-value">
                    {formatDate(date)}
                  </span>
                </div>
              </div>

              <div className="summary-item">
                <span className="summary-item-icon">
                  🕐
                </span>

                <div>
                  <span className="summary-label">
                    Horário
                  </span>

                  <span className="summary-value">
                    {time}
                  </span>
                </div>
              </div>

              <div className="summary-item">
                <span className="summary-item-icon">
                  🍽️
                </span>

                <div>
                  <span className="summary-label">
                    Vamos comer
                  </span>

                  <span className="summary-value">
                    {selectedFood?.icon} {selectedFood?.label}
                  </span>
                </div>
              </div>

              <div className="summary-item">
                <span className="summary-item-icon">
                  ✨
                </span>

                <div>
                  <span className="summary-label">
                    E depois...
                  </span>

                  <span className="summary-value">
                    {selectedActivity?.icon} {selectedActivity?.label}
                  </span>
                </div>
              </div>

            </div>

            <p className="summary-footer">
              Mal posso esperar! 🥰
            </p>

            <Button onClick={handleFinish}>
              FINALIZAR
            </Button>
          </>
        )}

      </Card>

    </section>
  )
}