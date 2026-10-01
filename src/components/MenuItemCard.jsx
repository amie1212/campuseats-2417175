function MenuItemCard({ name, description, price, available }) {
  const item = {
    name: name ?? 'Nasi Lemak Ayam Goreng',
    description: description ?? 'Coconut rice with spiced fried chicken, sambal, boiled egg, and peanuts',
    price: price ?? 7.5,
    available: available !== undefined ? available : true,
  }

  return (
    <article className="menu-card">
      <div className="thumb">{item.name[0]}</div>
      <h3>{item.name}</h3>
      <p className="description">{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button className="btn" disabled={!item.available}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}

export default MenuItemCard
