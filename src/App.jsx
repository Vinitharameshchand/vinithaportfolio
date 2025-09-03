
import styles from  "./App.module.css";
import {About} from "./components/About/About.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/hero/hero";
import { Experience } from "./components/Experience/Experience.jsx";




function App() {
   return(
    <div className={styles.App}>
       <Navbar />
       <Hero/>
       <About/>
       <Experience />
      
    </div>
   )
}

export default App;
