
import './App.css'
import AnimationSection from './components/AnimationSection/animation'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import SecondSection from './components/SecondSection/secsection'
import ThirdSection from './components/ThirdSection/thsection'

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
