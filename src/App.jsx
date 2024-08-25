import './App.css'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Reviews from './Review'
import Contact from './Contact'
import Products from './Products'

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
