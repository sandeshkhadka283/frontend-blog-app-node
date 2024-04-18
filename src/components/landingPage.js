import React from 'react';
import styles from '../components/LandingPage.module.css'; 
import { NavLink } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} end>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>About</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Blog</NavLink>
          <NavLink to="/guestbook" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Guestbook</NavLink>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profileImage}></div>
        <h1>Sandesh Khadka</h1>
        <p>Hey, I'm a developer who loves creating amazing products...</p>
        <div className={styles.profileStats}>
          <span>6,843 stars on this repo</span>
          <span>0 blog views all time</span>
        </div>
        <p className={styles.profileBio}>When I'm not coding...</p>
      </div>
    </div>
  );
}

export default LandingPage;
