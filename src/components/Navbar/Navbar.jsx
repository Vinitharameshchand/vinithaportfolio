import React , {useState, useEffect, useRef} from "react";
import Styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
  <nav className={Styles.Navbar}>
    <a className={Styles.title} href="/">portfolio</a>
    <div className={Styles.menu} ref={menuRef} >
       {menuOpen ? (
          <svg
            className={Styles.menuBtn}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="white"
            onClick={() => setMenuOpen(false)}
          >
            <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            className={Styles.menuBtn}
            width="30"
            height="30"
            viewBox="0 0 100 80"
            fill="white"
            onClick={() => setMenuOpen(true)}
          >
            <rect width="100" height="15" />
            <rect y="30" width="100" height="15" />
            <rect y="60" width="100" height="15" />
          </svg>
        )}

      {/* <svg 
      className={Styles.menuBtn} 
      width="30" 
      height="30" 
      viewBox="0 0 100 80"
       fill="white"
       onClick={() => setMenuOpen(!menuOpen)}>
       <rect width="100" height="15"></rect>
       <rect y="30" width="100" height="15"></rect>
       <rect y="60" width="100" height="15"></rect>
     </svg> */}

    {/* <img className={Styles.menuBtn} src={getImageUrl("/assests/nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>  */}
      <ul className={`${Styles.menuItems} ${
            menuOpen ? Styles.menuVisible : ""
          }`} onClick={() => setMenuOpen(false)}
        >
        <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
          
      </ul>
    </div>
  </nav>
  )
}
