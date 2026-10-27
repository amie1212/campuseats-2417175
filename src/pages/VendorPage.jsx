import { useParams, Link } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">We couldn't find a vendor with ID "{id}".</p>
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
          Back to vendors
        </Link>
      </div>
    )
  }

  return (
    <section>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>
          ← Back to all vendors
        </Link>
      </div>
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>{vendor.name}</h2>
        <p className="muted">
          {vendor.location} • Open: {vendor.openHours}
        </p>
        <span className={vendor.isOpen ? 'status open' : 'status closed'}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
      <h2 className="section-title">Menu</h2>
      <MenuList items={vendor.menu} />
    </section>
  )
}

export default VendorPage
