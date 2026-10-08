function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {currentYear} CampusEats &middot; BICS 3301, IIUM</p>
    </footer>
  )
}

export default Footer
