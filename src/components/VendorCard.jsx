function VendorCard() {
  const vendor = {
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B',
    openHours: '7:30 am - 10:30 pm',
    isOpen: true,
  }

  return (
    <article className="vendor-card">
      <div className="thumb">{vendor.name[0]}</div>
      <div className="vendor-info">
        <h3>{vendor.name}</h3>
        <p className="location">{vendor.location}</p>
        <p className="hours">Open: {vendor.openHours}</p>
        <span className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </article>
  )
}

export default VendorCard
