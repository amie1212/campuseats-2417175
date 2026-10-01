function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-meta">
          <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} CampusEats Inc. All rights reserved. &middot; BICS 3301 Cross-Platform Architecture, IIUM
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms of Use</a>
            <span className="separator">|</span>
            <a href="#">Campus Dining Guidelines</a>
          </div>
        </div>
        <p className="subtext">
          Designed with an Apple-inspired clean aesthetic for mahallah cafeteria pre-ordering.
        </p>
      </div>
    </footer>
  )
}

export default Footer
