
import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Statistics} from "./layout/sections/statistics/Statistics.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Education} from "./layout/sections/education/Education.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {


  return (
    <>
      <Header />
      <Main/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Statistics/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App
