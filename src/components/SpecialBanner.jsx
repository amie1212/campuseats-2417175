import { useState, useEffect } from 'react'

function SpecialBanner({ items }) {
  const specialItem = items?.find((item) => item.special)

  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    function calculateTimeLeft() {
      const now = new Date()
      // Special ends at 10:00 PM today
      const end = new Date()
      end.setHours(22, 0, 0, 0)

      const diff = end - now
      if (diff <= 0) {
        setTimeLeft('Ended')
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      const pad = (n) => String(n).padStart(2, '0')
      setTimeLeft(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!specialItem) return null

  return (
    <div
      className="card"
      style={{
        marginBottom: '1.25rem',
        borderLeft: '4px solid var(--green)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}
    >
      <div>
        <span className="tag">Daily Special</span>
        <h3 style={{ margin: '0.25rem 0' }}>{specialItem.name}</h3>
        <p className="muted" style={{ margin: 0 }}>
          {specialItem.description}
        </p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p className="price" style={{ margin: 0 }}>
          RM {specialItem.price.toFixed(2)}
        </p>
        <p className="muted" style={{ margin: '0.2rem 0', fontWeight: 600 }}>
          Ends in: {timeLeft}
        </p>
      </div>
    </div>
  )
}

export default SpecialBanner
