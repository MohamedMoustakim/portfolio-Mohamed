import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './componets/Footer'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Navbar from './componets/Navbar'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path='/Contact' element={<Contact />} />
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
