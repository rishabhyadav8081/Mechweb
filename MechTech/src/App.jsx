
import About from './Components/about/About'
import Campus from './Components/campus/Campus'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Hero from './Components/hero/Hero'
import Navbar from './Components/navbar/Navbar'
import Program from './Components/program/Program'
import Testimonial from './Components/testimonial/Testimonial'
import Title from './Components/title/Title'

function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <div className="container">
    <About/>
    <Title subtitle ='Our Program' Title="What we Offer"/>
    <Program/>
    <Title subtitle ='Gallery' Title="Campus Photos"/>
    <Campus/>
    <Title subtitle ='testimonials' Title="what students says"/>
    <Testimonial/>
    <Title subtitle ='Contact' Title="Get in Touch"/>
    <Contact/>
    </div>
    <Footer/>
   </>
  )
}
export default App
