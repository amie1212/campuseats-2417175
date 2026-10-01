import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuItemCard from './components/MenuItemCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="hero-banner">
          <h2>Order Ahead, Skip the Cafeteria Queue 🍽️</h2>
          <p>Fresh meals prepared by your favourite Mahallah vendors, ready for pickup.</p>
        </div>

        <section className="section-block">
          <div className="section-title-wrap">
            <h2>Today's vendors</h2>
            <span className="badge-count">Featured Stall</span>
          </div>
          <VendorCard />
        </section>

        <section className="section-block">
          <div className="section-title-wrap">
            <h2>Popular items</h2>
            <span className="badge-count">Daily Specials</span>
          </div>
          <div className="grid">
            <MenuItemCard
              name="Nasi Lemak Ayam Berempah"
              description="Fragrant coconut rice, crispy spiced fried chicken, sambal, boiled egg & roasted peanuts"
              price={8.0}
              available={true}
            />
            <MenuItemCard
              name="Roti Canai Telur Double"
              description="Freshly grilled crispy flatbread with double eggs, served with rich dhal and sambal"
              price={4.0}
              available={true}
            />
            <MenuItemCard
              name="Teh Tarik Kaw"
              description="Classic pulled milk tea with rich froth, brewed to traditional taste"
              price={2.5}
              available={false}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
