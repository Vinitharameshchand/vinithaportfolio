import React from 'react';
import Styles from './hero.module.css';


export const Hero = () => {
  return (
    <section className={Styles.container}>
      <img src="/assets/hero/heroImage.png" alt="It's my image" className={Styles.heroImage} />
      
      <div className={Styles.content}>
        <p className={Styles.title}>Hey there! 👋 I'm Vinitha ✨</p>
        <p className={Styles.description}><i>Turning coffee ☕ into code and dreams into digital reality 🚀<br></br>Frontend developer by day, creative problem-solver by night 🌙<br></br>Always learning, always laughing! 😄📚</i></p>
        <a href="mailto:vinitharameshchand@gmail.com" className={Styles.contactBtn}>
          📧 Let's Chat!
        </a>
        <br></br>
        <div className={Styles.linkedin} ></div>
          <a 
            href="https://www.linkedin.com/in/vinitha-r-75b82a291/"
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.contactBtn}
          >
            👤 Connect on LinkedIn
          </a>
          <br>
          </br>
          <a href="tel:+919876543210" className={Styles.contactBtn}>
  📞 Call Me
</a>


      </div>
      
      {/* Bright colorful butterflies */}
      <div className={Styles.butterfly} data-butterfly="1">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="2">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="3">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="4">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="5">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="6">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="7">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="8">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="9">
        <span>🦋</span>
      </div>
      <div className={Styles.butterfly} data-butterfly="10">
        <span>🦋</span>
      </div>
      
      <div className={Styles.topBlur} />
      <div className={Styles.bottomBlur} />
    </section>
  );
};

