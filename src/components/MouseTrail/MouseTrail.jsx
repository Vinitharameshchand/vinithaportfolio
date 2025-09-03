import React, { useEffect, useState } from 'react';
import styles from './MouseTrail.module.css';

export const MouseTrail = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create new particle
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };
      
      setParticles(prev => [...prev, newParticle]);
    };

    // Clean up old particles
    const cleanupInterval = setInterval(() => {
      setParticles(prev => 
        prev.filter(particle => Date.now() - particle.timestamp < 1000)
      );
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className={styles.mouseTrailContainer}>
      {/* Custom star cursor */}
      <div 
        className={styles.customCursor}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      >
        <div className={styles.starShape}>⭐</div>
        <div className={styles.cursorRing}></div>
        <div className={styles.cursorDot}></div>
      </div>
      
      {/* Cursor glow */}
      <div 
        className={styles.cursorGlow}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />
      
      {/* Particle trail */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${index * 20}ms`,
          }}
        />
      ))}
      
      {/* Interactive sparkles */}
      {particles.slice(-5).map((particle, index) => (
        <div
          key={`sparkle-${particle.id}`}
          className={styles.sparkle}
          style={{
            left: particle.x + Math.random() * 20 - 10,
            top: particle.y + Math.random() * 20 - 10,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
};
