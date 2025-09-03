import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/project.json';

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Cool Projects 🚀</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            {/* <img 
              className={styles.image}
              src={`/assets/projects/project${id + 1}.png`}
              alt={`Screenshot of ${project.title}`}
              onError={(e) => {
                e.target.src = '/assets/projects/placeholder.svg';
              }}
            /> */}
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
              {project.skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
            {/* <div className={styles.links}>
              <a 
                href={project.demo || "#"} 
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a 
                href={project.source || "#"} 
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};
