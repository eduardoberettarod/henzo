import './FloatingHearts.css'

const hearts = Array.from({ length: 20 })

export default function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {hearts.map((_, index) => (
        <span
          key={index}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
            fontSize: `${8 + Math.random() * 8}px`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}