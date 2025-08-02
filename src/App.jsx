import About from "./pages/About"
import Analysis from "./pages/Analysis"
import Experience from "./pages/Experience"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import VerticalMail from "./components/VerticalMail"
import "./app.scss";
import "./index.scss";
function App() {
  return (
    <div id="app" className="app">
      <Nav/>
      <Hero/> 
      <About/>
      <Experience/>
      <Projects />
      <Analysis/>
      <Contact/>
      <Footer/>
      <VerticalMail/>
    </div>
  )
}

export default App
