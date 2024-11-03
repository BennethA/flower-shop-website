import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Reviews from './components/Review'
import Contact from './components/Contact'
import Products from './components/Products'
import About from './components/About'

function App() {

  return (
    <div className='mt-[44px]'>
      <Header/>
      <Home/>
      <About/>
      <Products/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
