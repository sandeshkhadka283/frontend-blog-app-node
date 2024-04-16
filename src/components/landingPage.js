import React from 'react';
import styles from '../components/LandingPage.module.css'; 


function LandingPage() {
    // You can determine which navLink is active based on your routing or state
  const activeLink = 'home'; // Example; you would programmatically set this based on your current route
  return (
    <div className={styles.container}>
    <div className={styles.sidebar}>
      <a href="#home" className={`${styles.navLink} ${activeLink === 'home' ? styles.active : ''}`}>Home</a>
      <a href="#about" className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`}>About</a>
      <a href="#blog" className={`${styles.navLink} ${activeLink === 'blog' ? styles.active : ''}`}>Blog</a>
      <a href="#guestbook" className={`${styles.navLink} ${activeLink === 'guestbook' ? styles.active : ''}`}>Guestbook</a>
    </div>
      <div className={styles.profileContainer}>
        <div className={styles.profileImage}></div>
        <h1>Sandesh Khadka</h1>
        <p>Hey, I'm a developer who loves creating amazing products. I work at RoboTech as a Software Engineer.</p>
        <div className={styles.profileStats}>
          <span>6,843 stars on this repo</span>
          <span>0 blog views all time</span>
        </div>
        <p className={styles.profileBio}>When I'm not coding, I'm probably creating video content or watching movies. I also love to travel and explore new places.</p>
      </div>
    </div>
  );
}

export default LandingPage;
