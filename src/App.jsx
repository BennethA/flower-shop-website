import About from './About'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Products from './Products'
import Reviews from './Review'

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
