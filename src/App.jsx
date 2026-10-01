import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuItemCard from './components/MenuItemCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        {/* Apple-style Hero Showcase */}
        <section className="hero-section">
          <span className="hero-eyebrow">CampusEats &bull; Week 1 Checkpoint</span>
          <h2 className="hero-headline">Pre-order seamlessly.<br />From your Mahallah.</h2>
          <p className="hero-subheadline">
            Skip long queues between lectures. Freshly prepared breakfast, lunch, and drinks ready right when you arrive.
          </p>
        </section>

        {/* Today's vendors Section */}
        <section className="section-group">
          <div className="section-header">
            <h2>Today's vendors</h2>
            <span className="section-badge">1 Location</span>
          </div>
          <VendorCard />
        </section>

        {/* Popular items Section */}
        <section className="section-group">
          <div className="section-header">
            <h2>Popular items</h2>
            <span className="section-badge">Curated Menu</span>
          </div>
          <div className="grid">
            <MenuItemCard
              name="Nasi Lemak Ayam Berempah"
              description="Aromatic coconut rice, spiced crispy chicken, traditional sambal, boiled egg & roasted peanuts"
              price={8.0}
              available={true}
            />
            <MenuItemCard
              name="Roti Canai Telur Double"
              description="Crisp golden layered flatbread pan-grilled with double eggs, paired with aromatic dhal"
              price={4.0}
              available={true}
            />
            <MenuItemCard
              name="Teh Tarik Kaw"
              description="Rich pulled milk tea with silky froth, brewed with fragrant Ceylon black tea"
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
