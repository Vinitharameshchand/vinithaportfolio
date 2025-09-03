// import React from 'react'
// import { getImageUrl } from '../../utlis'
// import  styles from './About.module.css'

// export const About = () => {
//   return (
//     <section className={styles.container} id='about'>
//         <h2 className={styles.title}>About</h2>
//         <div className={styles.content}>
//             <img
//              src = {"public/assets/about/aboutImage.png"}
//              alt="me sitting with my lappp" className={styles.aboutImage}/>
//              <ul className={styles.aboutItems}>
//               <li className={styles.aboutItem}>
//                 <img src={"public/assets/about/cursorIcon.png"} alt="cursorIcon" />
//                 <div className={styles.aboutItemText}>
//                   <h3>FRONT-END Developer</h3>
//                   <p>
//                     I am a frontend developer with Experience in but optimized sites
//                   </p>
//                 </div>
//               </li>
//               <li className={styles.aboutItem}>
//                 <img src={"public/assets/about/serverIcon.png"} alt="serverIcon" />
//                 <div className={styles.aboutItemText}>
//                   <h3>BACK-END Developer</h3>
//                   <p>
//                     I have experience developing fast and optimised and APIs
//                   </p>
//                 </div>
//               </li>
//              <li className={styles.aboutItem}>
//                 <img src={"public/assets/about/cursorIcon.png"} alt="cursorIcon" />
//                 <div className={styles.aboutItemText}>
//                   <h3>APP Developer</h3>
//                   <p>
//                     I have developed a todo app in which i have used react and connected it with firebase API 
//                   </p>
//                 </div>
//               </li>
//                 <li className={styles.aboutItem}>
//                 <img src={"public/assets/about/cursorIcon.png"} alt="cursorIcon" />
//                 <div className={styles.aboutItemText}>
//                   <h3>UI Designer</h3>
//                   <p>
//                      i have designed multiple landing pages design with figma for an startup company name PLUMBER GUY , i have made for both web and mobile app
//                   </p>
//                 </div>
//               </li>
//               </ul>
//         </div>
//     </section>
//   )
// }


import React from 'react';
import { getImageUrl } from '../../utlis';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"/assets/about/aboutImage.png"}
          alt="Vinitha sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"/assets/about/cursorIcon.png"} alt="Front-end Icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>
                Skilled in building responsive, user-friendly interfaces using React.js, HTML, and CSS to create seamless user experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"/assets/about/serverIcon.png"} alt="Back-end Icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Developer</h3>
              <p>
                Experienced in developing efficient and scalable APIs, integrating Firebase Realtime Database and Authentication services for real-time functionality.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"/assets/about/cursorIcon.png"} alt="App Development Icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Developer</h3>
              <p>
                Developed cross-platform mobile applications using React Native, including a fully functional To-Do List app with real-time cloud syncing and authentication.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"/assets/about/cursorIcon.png"} alt="UI Design Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                Designed intuitive, modern web and mobile interfaces using Figma, creating wireframes and prototypes tailored for startup projects like Plumber Guy.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

