import { useVendors } from '../hooks/useVendors.js'
import VendorCard from '../components/VendorCard.jsx'
import SpecialBanner from '../components/SpecialBanner.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function HomePage() {
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  // Collect today's specials from vendors for personal feature (digit 5)
  const specials = vendors.flatMap((vendor) =>
    (vendor.menu || [])
      .filter((item) => item.special)
      .map((item) => ({
        ...item,
        vendorId: vendor.id,
        vendorName: vendor.name,
      }))
  )

  return (
    <>
      {specials.length > 0 && (
        <section>
          <h2 className="section-title">Today's Specials</h2>
          <SpecialBanner specials={specials} />
        </section>
      )}

      <section>
        <h2 className="section-title">Choose a vendor</h2>
        <div className="vendor-grid">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
