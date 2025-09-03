import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me 😊</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={"/assets/about/aboutImage.png"}
            alt="Vinitha sitting with laptop"
            className={styles.aboutImage}
          />
          {/* Decorative thumbnails */}
          <div className={styles.thumbnail} data-tech="react">
            <span>⚛️</span>
          </div>
          <div className={styles.thumbnail} data-tech="js">
            <span>🟨</span>
          </div>
          <div className={styles.thumbnail} data-tech="figma">
            <span>🎨</span>
          </div>
          <div className={styles.thumbnail} data-tech="firebase">
            <span>🔥</span>
          </div>
          <div className={styles.thumbnail} data-tech="mobile">
            <span>📱</span>
          </div>
          <div className={styles.thumbnail} data-tech="code">
            <span>💻</span>
          </div>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"/assets/about/cursorIcon.png"} alt="Front-end Icon" />
            <div className={styles.aboutItemText}>
              <h3>🎨 Front-End Developer</h3>
              <p>
                I love crafting beautiful, responsive interfaces that make users go "wow!" 🤩 Using React.js, HTML, and CSS, I turn designs into interactive experiences that work seamlessly across all devices. 📱💻
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"/assets/about/serverIcon.png"} alt="Back-end Icon" />
            <div className={styles.aboutItemText}>
              <h3>⚙️ Back-End Developer</h3>
              <p>
                Behind every great app is solid backend magic! ✨ I build robust APIs and work with Firebase to create real-time, scalable solutions that keep everything running smoothly behind the scenes. 🔧🔥
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"/assets/about/cursorIcon.png"} alt="App Development Icon" />
            <div className={styles.aboutItemText}>
              <h3>📱 Mobile App Developer</h3>
              <p>
                Creating apps that fit right in your pocket! 😄 I develop cross-platform mobile experiences with React Native, complete with real-time features and smooth authentication. My To-Do app even syncs across devices like magic! ✨🔄
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"/assets/about/cursorIcon.png"} alt="UI Design Icon" />
            <div className={styles.aboutItemText}>
              <h3>🌿 UI/UX Designer</h3>
              <p>
                I believe great design tells a story! 📜 Using Figma, I craft intuitive interfaces and user journeys that feel natural and delightful. From wireframes to pixel-perfect prototypes, I make sure every click feels just right! ✨🎨
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

