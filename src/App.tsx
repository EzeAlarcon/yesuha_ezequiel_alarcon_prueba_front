
import './App.css'
import AnimationSection from './components/AnimationSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'

function App() {


  return (
    <>
    <div className='firstSection'>
      <div className='containerHeaderHero'>
        <Header />
        <Hero />
      </div>
      <div className='containerAnimationSection'>
        <AnimationSection />    
      </div>
    </div>

     <SecondSection />
     <ThirdSection />
     <Footer />
    </>
  )
}

export default App
