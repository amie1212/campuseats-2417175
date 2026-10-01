function MenuItemCard({ name, description, price, available }) {
  const item = {
    name: name ?? 'Nasi Lemak Ayam Berempah',
    description: description ?? 'Fragrant coconut rice, crispy spiced fried chicken, sambal, boiled egg & peanuts',
    price: price ?? 8.0,
    available: available !== undefined ? available : true,
  }

  return (
    <article className="menu-card">
      <div className="card-header">
        <div className="thumb">{item.name[0]}</div>
        <span className="stock-pill">{item.available ? 'In Stock' : 'Sold out'}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="description">{item.description}</p>
      </div>
      <div className="card-action">
        <div className="price-wrapper">
          <span className="price-label">Price</span>
          <span className="price">RM {item.price.toFixed(2)}</span>
        </div>
        <button className="btn" disabled={!item.available}>
          {item.available ? 'Add to cart' : 'Sold out'}
        </button>
      </div>
    </article>
  )
}

export default MenuItemCard
