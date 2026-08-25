import { useLayoutEffect, useRef, useState } from 'react'
import './InputHome.css'

export default function InputHome({ type, input_id, onChange }) {
  const [value, setValue] = useState('')
  const [textWidth, setTextWidth] = useState(0)
  const textMeasure = useRef(null)
  const displayedValue = type === 'password' ? '\u2022'.repeat(value.length) : value

  useLayoutEffect(() => {
    setTextWidth(textMeasure.current?.offsetWidth ?? 0)
  }, [displayedValue])

  return (
    <div className='input-container'>
      <i className='bi bi-chevron-right'></i>
      <div className='input-field'>
        <span ref={textMeasure} className='input-text-measure' aria-hidden='true'>
          {displayedValue || '\u00a0'}
        </span>
        <span
          className='input-caret'
          aria-hidden='true'
          style={{ left: `${textWidth}px` }}
        />
        <input
          type={type}
          id={input_id}
          className='input-welcome'
          value={value}
          onChange={(event) => {
            const nextValue = event.target.value
            setValue(nextValue)
            onChange?.(nextValue)
          }}
          style={{ width: `${Math.max(textWidth + 8, 2 * 16)}px` }}
        />
      </div>
    </div>
  )
}
