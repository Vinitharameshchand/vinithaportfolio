// import React from 'react';
// import Styles from './hero.module.css';
// import { getImageUrl } from '../../../utlis';

// export const hero = () => {
//   return ( <section className={Styles.container}>
//     <div className={Styles.content}><h1 className={Styles.title}>HIII , I'm vinitha</h1>
//     <p className={Styles.description}> I'm a student </p>
//     <a href="mailto:vinitharameshchand@gmail.com" className={Styles.contactBtn}>email mee</a>
//      </div>
//      <img src={getImageUrl("/assets/hero/vinitha.jpg")} alt="its my image" className={Styles.heroimage} />
//      <div className={Styles.topBlur}/>
//      <div className={Styles.bottomBlur}/>
//   </section>
//   )
// }

// import React from 'react';
// import Styles from './hero.module.css';
// import { getImageUrl } from '../../../utlis';

// // ✅ Capitalized component name
// export const Hero = () => {
//   return (
//     <section className={Styles.container}>
//       <div className={Styles.content}>
//         <h1 className={Styles.title}>HIII, I'm Vinitha</h1>
//         <p className={Styles.description}>I'm a student</p>
//         <a href="mailto:vinitharameshchand@gmail.com" className={Styles.contactBtn}>Email Me</a>
//       </div>

//       {/* ✅ Image path corrected */}
//       <img
//         src={getImageUrl('assets/hero/vinitha.jpg')}
//         alt="It's my image"
//         className={Styles.heroimage}
//       />

//       <div className={Styles.topBlur} />
//       <div className={Styles.bottomBlur} />
//     </section>
//   );
// };

import React from 'react';
import Styles from './hero.module.css';


export const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <p className={Styles.title}>HIII , I'm Vinitha</p>
        <p className={Styles.description}><i>Turning coffee ☕ into code <br></br>and ideas into apps 💻 . </i><br></br>~Always learner </p>
        <a href="mailto:vinitharameshchand@gmail.com" className={Styles.contactBtn}>
          Email Me
        </a>
        <br></br>
        <div className={Styles.linkedin} ></div>
          <a 
            href="https://www.linkedin.com/in/vinitha-r-75b82a291/"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.contactBtn}
          >
            LinkedIn
          </a>
          <br>
          </br>
          <a href="tel:+919876543210" className={Styles.contactBtn}>
  📞 Call Me
</a>


      </div>

      <img src="/assets/hero/heroImage.png" alt="It's my image" className={Styles.heroImage} />
      <img src='/assets/hero/heroImage2.png' alt="its again me" className={Styles.heroImage2} />
      

      <div className={Styles.topBlur} />
      <div className={Styles.bottomBlur} />
    </section>
  );
};

