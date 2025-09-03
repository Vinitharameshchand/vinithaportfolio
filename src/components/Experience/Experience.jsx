import React from 'react';
import styles from "./Experience.module.css";


// Simple utility function - no export to avoid Fast Refresh issues
const getImageUrl = (name) => `/assets/${name}`;

// Skills and history data - matching your actual file structure
const skills = [
  { title: "Python", imageSrc: "skills/python.png" },
  { title: "JavaScript", imageSrc: "skills/javascript.png" },
  { title: "React JS", imageSrc: "skills/react.png" },
  { title: "React Native", imageSrc: "skills/react-native.png" },
  { title: "Firebase", imageSrc: "skills/firebase.png" },
  { title: "HTML", imageSrc: "skills/html.png" },
  { title: "CSS", imageSrc: "skills/css.png" },
  { title: "MySQL", imageSrc: "skills/mysql.png" },
  { title: "VB.NET", imageSrc: "skills/vbnet.png" },
  { title: "Figma", imageSrc: "skills/figma.png" },
  { title: "GitHub", imageSrc: "skills/github.png" }
];


const history = [
  {
    role: "Intern – Software and App Development",
    organisation: "Pinesphere Solutions Pvt. Ltd",
    startdate: "March 2025",
    enddate: "Present",
    imagesrc: "history/pinesphere.png",
    experiences: [
      "💻 Full-stack development intern diving deep into UI/UX design and real-time app magic!",
      "📱 Built an amazing To-Do mobile app with React Native + Firebase auth that actually works like a charm!",
      "🎨 Crafted pixel-perfect responsive layouts and brought ideas to life with Figma prototypes",
      "🔄 Mastered Git & GitHub for seamless team collaboration (no more merge conflicts nightmares!)",
      "🔥 Integrated Firebase Realtime Database - watching data sync in real-time never gets old!",
      "🏆 Snagged 2nd place in company hackathon - teamwork makes the dream work! 🚀"
    ]
  },
  {
    role: "Founder",
    organisation: "The Plumber Guy (Startup Project)",
    startdate: "April 2025",
    enddate: "Present",
    imagesrc: "history/plumberguy.png",
    experiences: [
      "🚀 Launched my own startup! Building an AI-powered plumbing platform that connects users with verified plumbers seamlessly",
      "🎨 Leading the entire product design journey - from wireframes to React Native reality with Firebase magic!",
      "📊 Became a user research pro! Conducting surveys and validating features to build what people actually need",
      "👥 Managing an amazing team of developers and mentors - startup life is wild but so rewarding!",
      "⚙️ Currently coding real-time tracking, secure authentication, and our AI assistant - the future is exciting! 🤖✨"
    ]
  }
];

export const Experience = () => {
  const handleImageError = (e, imageName) => {
    console.error(`Failed to load image: ${e.target.src}`);
    console.log(`Original image name: ${imageName}`);
  };

  const handleImageLoad = (e, imageName) => {
    console.log(`✅ Successfully loaded: ${imageName}`);
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My Journey 🚀</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImagecontainer}>
                <img 
                  src={getImageUrl(skill.imageSrc)} 
                  alt={skill.title}
                  onError={(e) => handleImageError(e, skill.imageSrc)}
                  onLoad={(e) => handleImageLoad(e, skill.imageSrc)}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Experience / History Section */}
        <ul className={styles.history}>
          {history.map((item, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(item.imagesrc)}
                alt={`${item.organisation} Logo`}
                onError={(e) => handleImageError(e, item.imagesrc)}
                onLoad={(e) => handleImageLoad(e, item.imagesrc)}
              />
              <div className={styles.historyItemdetail}>
                <h3>{`${item.role}, ${item.organisation}`}</h3>
                <p>{`${item.startdate} - ${item.enddate}`}</p>
                <ul>
                  {item.experiences.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};