
import styles from  "./App.module.css";
import "./warm-aesthetic-backgrounds.css";
import {About} from "./components/About/About.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import {Hero}  from "./components/hero/Hero";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { MouseTrail } from "./components/MouseTrail/MouseTrail.jsx";




function App() {
   return(
    <div className={`${styles.App} bg-golden-hour`}>
       {/* Mouse Trail Effect */}
       <MouseTrail />
       
       {/* Golden Hour floating elements */}
       <div className="warm-floating-circle gold medium top-right"></div>
       <div className="warm-floating-circle peach large bottom-left"></div>
       <div className="warm-floating-circle coral small center-left"></div>
       
       <Navbar />
       <Hero/>
       <About/>
       <Experience />
       <Projects />
    </div>
   )
}

export default App;
