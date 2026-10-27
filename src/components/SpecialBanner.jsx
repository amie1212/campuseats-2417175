import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function SpecialBanner({ specials }) {
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

  if (!specials || specials.length === 0) return null

  return (
    <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
      {specials.map((special) => (
        <Link
          key={special.id}
          to={`/vendor/${special.vendorId}`}
          className="card"
          style={{
            borderLeft: '4px solid var(--green)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span className="tag">Daily Special</span>
              <span className="muted" style={{ fontSize: '0.85rem' }}>
                {special.vendorName}
              </span>
            </div>
            <h3 style={{ margin: '0.35rem 0' }}>{special.name}</h3>
            <p className="muted" style={{ margin: 0 }}>
              {special.description}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="price" style={{ margin: 0, color: 'var(--green)' }}>
              RM {special.price.toFixed(2)}
            </p>
            <p className="muted" style={{ margin: '0.2rem 0', fontWeight: 600 }}>
              Ends in: {timeLeft}
            </p>
            <span style={{ fontSize: '0.85rem', color: 'var(--green)', fontWeight: 600 }}>
              Order now →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SpecialBanner
