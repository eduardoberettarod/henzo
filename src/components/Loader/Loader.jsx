import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Loader.css'

export default function Loader({ setLoader, first, second }) {
  const loaderContainer = useRef(null)
  const firstText = useRef(null)
  const secondText = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setLoader(false)
      }
    })

    timeline
      .fromTo(
        firstText.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
        }
      )
      .to(firstText.current, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        delay: 1,
        ease: 'power2.in',
      })
      .fromTo(
        secondText.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }
      )
      .to(secondText.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 1.5,
        ease: 'power2.in',
      })
      .to(loaderContainer.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out',
      })

    return () => {
      timeline.kill()
    }
  }, [first, second, setLoader])

  return (
    <div ref={loaderContainer} className="loader-container">
      <span ref={firstText} className="welcome-text">
        {first}
      </span>

      <span ref={secondText} className="welcome-text">
        {second}
      </span>
    </div>
  )
}