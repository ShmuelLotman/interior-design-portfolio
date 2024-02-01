import AboutComponent from '@/components/AboutComponent'
import CatalogSwiperSection from '@/components/CatalogSwiperCection'
import CatalogueSection from '@/components/CatalogueSection'
import CompanySection from '@/components/CompanySection'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
    </>
  )
}
