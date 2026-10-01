function Header() {
  const cartCount = 0

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">
          <span className="logo-icon">🍽️</span> CampusEats
        </h1>
        <nav className="nav">
          <a href="#">Vendors</a>
          <a href="#">My Orders</a>
          <a href="#" className="cart-link">
            Cart <span className="badge">{cartCount}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
