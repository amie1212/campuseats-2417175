import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuItemCard from './components/MenuItemCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2>Today's vendors</h2>
          <VendorCard />
        </section>

        <section>
          <h2>Popular items</h2>
          <div className="grid">
            <MenuItemCard
              name="Nasi Lemak Ayam Goreng"
              description="Coconut rice with spiced fried chicken, sambal, boiled egg, and peanuts"
              price={7.5}
              available={true}
            />
            <MenuItemCard
              name="Roti Canai Telur"
              description="Fluffy layered flatbread with egg, served with aromatic dhal"
              price={3.5}
              available={true}
            />
            <MenuItemCard
              name="Teh Tarik"
              description="Frothy pulled milk tea brewed with black Ceylon tea"
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
