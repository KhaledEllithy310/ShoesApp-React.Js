
import './App.css'
import {Footer} from './components/Footer/footer'
import { Header } from './components/Header/header'
import {ProductList} from './components/productList/product-List'
import { Slider } from './components/Slider/slider'
import { ContactUs } from './components/ContactUs/contact-us';
import { AboutUs } from './components/AboutUs/about-us'

function App() {

  return (
    <>
    <Header/>
    <Slider/>
    <AboutUs/>
    <ProductList/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
