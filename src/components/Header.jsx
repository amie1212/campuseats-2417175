function Header() {
  const cartCount = 0

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">
          <svg className="apple-logo-mark" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          CampusEats
        </h1>
        <nav className="nav">
          <a href="#">Vendors</a>
          <a href="#">My Orders</a>
          <a href="#" className="cart-nav-link">
            Cart <span className="badge">{cartCount}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
