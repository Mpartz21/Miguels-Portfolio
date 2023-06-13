import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks,
         Navbar, Tech, Works} from "./components"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
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
