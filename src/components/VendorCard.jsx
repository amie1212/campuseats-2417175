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
      <div className="vendor-body">
        <div className="vendor-top-row">
          <div>
            <span className="eyebrow-tag">Featured Stall</span>
            <h3 className="vendor-title">{vendor.name}</h3>
          </div>
          <span className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
            <span className="status-indicator"></span>
            {vendor.isOpen ? 'Open now' : 'Closed'}
          </span>
        </div>
        <div className="vendor-details-row">
          <p className="location">
            <span className="detail-icon">📍</span> {vendor.location}
          </p>
          <span className="dot-separator">•</span>
          <p className="hours">
            <span className="detail-icon">🕒</span> Open: {vendor.openHours}
          </p>
        </div>
      </div>
    </article>
  )
}

export default VendorCard
