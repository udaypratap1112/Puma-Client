
import { Header } from '../../components/header/Header'
import ProductSlider from '../../components/productSlider/ProductSlider'
import { Collections, Collections2 } from '../../components/collectionPage/Collections'
import LowerBannner from '../../components/lowerBanners/LowerBannner'


export const Home = () => {

  
  return (
      <div className='container-fluid'>
      <Header />
      <main>
      <ProductSlider />
      <Collections/>
    </main>
    <LowerBannner />
    <main>
      
      <Collections2 />
      <ProductSlider />
    </main>
   
    </div>
  )
}
