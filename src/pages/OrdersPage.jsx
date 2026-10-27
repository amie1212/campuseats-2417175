import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (!orders || orders.length === 0) {
    return (
      <div className="card">
        <h2>My Orders</h2>
        <p className="muted">No orders placed yet.</p>
        <Link
          to="/"
          className="btn"
          style={{
            display: 'inline-block',
            width: 'auto',
            marginTop: '1rem',
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          Start ordering
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="section-title">My Orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>Order for {order.name}</h3>
                <p className="muted" style={{ margin: '0.2rem 0' }}>
                  Mahallah: {order.mahallah} • Pickup time:{' '}
                  <strong>{order.pickupTime}</strong>
                </p>
                {order.placedAt && (
                  <p className="muted" style={{ fontSize: '0.8rem', margin: 0 }}>
                    Placed at: {order.placedAt}
                  </p>
                )}
              </div>
              <p
                className="price"
                style={{ margin: 0, color: 'var(--green)', fontSize: '1.2rem' }}
              >
                RM {order.total.toFixed(2)}
              </p>
            </div>

            <hr
              style={{
                border: 'none',
                borderTop: '1px solid #e4e7eb',
                margin: '0.75rem 0',
              }}
            />

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {order.items?.map((line) => (
                <li
                  key={line.item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.25rem 0',
                    fontSize: '0.9rem',
                  }}
                >
                  <span>
                    {line.qty} × {line.item.name}
                  </span>
                  <span className="muted">
                    RM {(line.item.price * line.qty).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrdersPage
