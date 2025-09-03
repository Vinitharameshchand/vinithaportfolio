// import React from 'react';

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json"
// import { getImageUrl } from '../../utlis';

// export const Experience = () => {
//   return(
//      <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>{
//           skills.map((skill, id)=>{
//             return (<div key={id} className={styles.skill}>
//                 <div className={styles.skillImagecontainer}> 
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//               );
//           }) }
//           </div>
//           <ul className={styles.history}>
//           {
//             history.map((historyItem,id)=>{
//                return(
//                <li key={id} className={styles.historyItem}>
//                 <img src={getImageUrl(historyItem.imagesrc)} alt={`${historyItem.organisation} Logo`} />

//                 <div className={styles.historyItemdetail}>
//                   <h3>{ `${historyItem.role}, ${historyItem.organisation}`} </h3>
//                   <p>
//                     {`${historyItem.startdate} - ${historyItem.enddate}`}
//                   </p>
//                   <ul>
//                      {historyItem.experiences.map((Experience, id)=>{
//                       return <li key = {id}>{Experience}</li>;
//                      })}
//                   </ul>
//                 </div>


//               </li>
//             ) })
          
//           }
//         </ul>
//     </div>
//   </section>
//   )
// }


// import React from 'react';

// import styles from "./Experience.module.css";
// import { getImageUrl } from '../../utlis';

// // Example data based on resume to import or define here
// const skills = [
//   { title: "Python", imageSrc: "python.png" },
//   { title: "JavaScript", imageSrc: "javascript.png" },
//   { title: "React JS", imageSrc: "react.png" },
//   { title: "React Native", imageSrc: "react-native.png" },
//   { title: "Firebase", imageSrc: "firebase.png" },
//   { title: "HTML", imageSrc: "html.png" },
//   { title: "CSS", imageSrc: "css.png" },
//   { title: "MySQL", imageSrc: "mysql.png" },
//   { title: "VB.NET", imageSrc: "vbnet.png" },
//   { title: "Figma", imageSrc: "figma.png" },
//   { title: "GitHub", imageSrc: "github.png" }
// ];

// const history = [
//   {
//     role: "Intern – Software and App Development",
//     organisation: "Pinesphere Solutions Pvt. Ltd",
//     startdate: "March 2025",
//     enddate: "Present",
//     imagesrc: "pinesphere-logo.png",
//     experiences: [
//       "Full-stack development intern with exposure to UI/UX design and real-time app integration.",
//       "Developed a To-Do mobile app using React Native and implemented user authentication with Firebase.",
//       "Created responsive web layouts using HTML and CSS, and designed UI prototypes with Figma.",
//       "Used Git and GitHub for version control and team collaboration.",
//       "Integrated Firebase Realtime Database and Authentication services for backend functionality.",
//       "Secured 2nd place in a company-hosted hackathon, demonstrating strong problem-solving and team skills."
//     ]
//   },
//   {
//     role: "Founder",
//     organisation: "The Plumber Guy (Startup Project)",
//     startdate: "April 2025",
//     enddate: "Present",
//     imagesrc: "plumber-guy-logo.png",
//     experiences: [
//       "Initiated and currently developing an AI-integrated plumbing assistance platform aimed at connecting users with verified plumbers efficiently.",
//       "Leading product design, UI/UX wireframes, and core app functionality using React Native and Firebase.",
//       "Conducted user surveys, market research, and feature validation for customer-centric app design.",
//       "Coordinated with a small team of developers and mentors to shape the MVP for launch readiness.",
//       "Currently working on real-time service tracking, authentication system, and AI-based query assistant module."
//     ]
//   }
// ];

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         {/* Skills Section */}
//         <div className={styles.skills}>
//           {skills.map((skill, id) => (
//             <div key={id} className={styles.skill}>
//               <div className={styles.skillImagecontainer}>
//                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//               </div>
//               <p>{skill.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Experience / History Section */}
//         <ul className={styles.history}>
//           {history.map((item, id) => (
//             <li key={id} className={styles.historyItem}>
//               <img src={getImageUrl(item.imagesrc)} alt={`${item.organisation} Logo`} />
//               <div className={styles.historyItemdetail}>
//                 <h3>{`${item.role}, ${item.organisation}`}</h3>
//                 <p>{`${item.startdate} - ${item.enddate}`}</p>
//                 <ul>
//                   {item.experiences.map((exp, index) => (
//                     <li key={index}>{exp}</li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };



// import React from 'react';
// import styles from "./Experience.module.css";

// // utility to fetch image from public/assets
// export const getImageUrl = (name) => `/assets/${name}`;

// // Example data based on resume
// const skills = [
//   { title: "Python", imageSrc: "python.png" },
//   { title: "JavaScript", imageSrc: "javascript.png" },
//   { title: "React JS", imageSrc: "react.png" },
//   { title: "React Native", imageSrc: "react-native.png" },
//   { title: "Firebase", imageSrc: "firebase.png" },
//   { title: "HTML", imageSrc: "html.png" },
//   { title: "CSS", imageSrc: "css.png" },
//   { title: "MySQL", imageSrc: "mysql.png" },
//   { title: "VB.NET", imageSrc: "vbnet.png" },
//   { title: "Figma", imageSrc: "figma.png" },
//   { title: "GitHub", imageSrc: "github.png" }
// ];

// const history = [
//   {
//     role: "Intern – Software and App Development",
//     organisation: "Pinesphere Solutions Pvt. Ltd",
//     startdate: "March 2025",
//     enddate: "Present",
//     imagesrc: "pinesphere.png",
//     experiences: [
//       "Full-stack development intern with exposure to UI/UX design and real-time app integration.",
//       "Developed a To-Do mobile app using React Native and implemented user authentication with Firebase.",
//       "Created responsive web layouts using HTML and CSS, and designed UI prototypes with Figma.",
//       "Used Git and GitHub for version control and team collaboration.",
//       "Integrated Firebase Realtime Database and Authentication services for backend functionality.",
//       "Secured 2nd place in a company-hosted hackathon, demonstrating strong problem-solving and team skills."
//     ]
//   },
//   {
//     role: "Founder",
//     organisation: "The Plumber Guy (Startup Project)",
//     startdate: "April 2025",
//     enddate: "Present",
//     imagesrc: "plumber-guy-logo.png",
//     experiences: [
//       "Initiated and currently developing an AI-integrated plumbing assistance platform aimed at connecting users with verified plumbers efficiently.",
//       "Leading product design, UI/UX wireframes, and core app functionality using React Native and Firebase.",
//       "Conducted user surveys, market research, and feature validation for customer-centric app design.",
//       "Coordinated with a small team of developers and mentors to shape the MVP for launch readiness.",
//       "Currently working on real-time service tracking, authentication system, and AI-based query assistant module."
//     ]
//   }
// ];

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         {/* Skills Section */}
//         <div className={styles.skills}>
//           {skills.map((skill, id) => (
//             <div key={id} className={styles.skill}>
//               <div className={styles.skillImagecontainer}>
//                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//               </div>
//               <p>{skill.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Experience / History Section */}
//         <ul className={styles.history}>
//           {history.map((item, id) => (
//             <li key={id} className={styles.historyItem}>
//               <img
//                 src={getImageUrl(item.imagesrc)}
//                 alt={`${item.organisation} Logo`}
//               />
//               <div className={styles.historyItemdetail}>
//                 <h3>{`${item.role}, ${item.organisation}`}</h3>
//                 <p>{`${item.startdate} - ${item.enddate}`}</p>
//                 <ul>
//                   {item.experiences.map((exp, index) => (
//                     <li key={index}>{exp}</li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };


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
      "Full-stack development intern with exposure to UI/UX design and real-time app integration.",
      "Developed a To-Do mobile app using React Native and implemented user authentication with Firebase.",
      "Created responsive web layouts using HTML and CSS, and designed UI prototypes with Figma.",
      "Used Git and GitHub for version control and team collaboration.",
      "Integrated Firebase Realtime Database and Authentication services for backend functionality.",
      "Secured 2nd place in a company-hosted hackathon, demonstrating strong problem-solving and team skills."
    ]
  },
  {
    role: "Founder",
    organisation: "The Plumber Guy (Startup Project)",
    startdate: "April 2025",
    enddate: "Present",
    imagesrc: "history/plumberguy.png",
    experiences: [
      "Initiated and currently developing an AI-integrated plumbing assistance platform aimed at connecting users with verified plumbers efficiently.",
      "Leading product design, UI/UX wireframes, and core app functionality using React Native and Firebase.",
      "Conducted user surveys, market research, and feature validation for customer-centric app design.",
      "Coordinated with a small team of developers and mentors to shape the MVP for launch readiness.",
      "Currently working on real-time service tracking, authentication system, and AI-based query assistant module."
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
      <h2 className={styles.title}>Experience</h2>
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