import { BrowserRouter } from "react-router-dom"
import  { IntroTop, About, Contact, Experience, Feedbacks,
         Navbar, Tech, Works, Hero} from "./components"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat bg-center">
          <Navbar />
          <IntroTop/>
          <Hero /> 
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
