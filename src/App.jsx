import "./App.css"
// import ScrollAnimationComponent from "./ScrrollANimation"
// import ScrollAnimationComponent from "./ScrrollANimation"

import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div>
     <Header/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     {/* <ScrollAnimationComponent/> */}
    </div>
  )
}

export default App