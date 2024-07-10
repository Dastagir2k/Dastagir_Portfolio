import "./App.css"
// import ScrollAnimationComponent from "./ScrrollANimation"
// import ScrollAnimationComponent from "./ScrrollANimation"

import About from "./components/About"
import Contact from "./components/Contact"
import Design from "./components/Design"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div>
      <Design />
     <Header/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     {/* <ScrollAnimationComponent/> */}
     <Analytics/>
    </div>
  )
}

export default App