import './Button.css'

export default function Button({ title = 'Button', children, ...buttonProps }) {
  return (
    <button {...buttonProps} className='button'>
      {children ?? title}
    </button>
  )
}
