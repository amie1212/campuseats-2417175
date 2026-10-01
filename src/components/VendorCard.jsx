function VendorCard() {
  const vendor = {
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B (Ground Floor)',
    openHours: '7:30 AM – 10:30 PM',
    isOpen: true,
  }

  return (
    <article className="vendor-card">
      <div className="thumb">{vendor.name[0]}</div>
      <div className="vendor-details">
        <div className="vendor-header">
          <h3 className="vendor-name">{vendor.name}</h3>
          <span className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
            <span className="status-dot"></span>
            {vendor.isOpen ? 'Open now' : 'Closed'}
          </span>
        </div>
        <p className="vendor-meta location">
          <span className="meta-icon">📍</span> {vendor.location}
        </p>
        <p className="vendor-meta hours">
          <span className="meta-icon">🕒</span> Open: {vendor.openHours}
        </p>
      </div>
    </article>
  )
}

export default VendorCard
