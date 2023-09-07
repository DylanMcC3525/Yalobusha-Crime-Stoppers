import styles from '../styles/home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


const index = () => {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isProcessHovered, setIsProcessHovered] = useState(false);

  const toggleAboutHover = () => setIsAboutHovered(!isAboutHovered);
  const toggleProcessHover = () => setIsProcessHovered(!isProcessHovered);


  const variants = {
    hovered: {scale: 2},
    nonHovered: {scale: 1.5}
  }

  return (
    <div className={styles.landing}>
      <div className={styles.overlay}></div>
      <div className={styles.center}>
      <div className={styles.slider}>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
      </div>
        <div className={styles.main}>
        <h1 className={styles.text}>Yalobusha County Crime Stoppers</h1>
        <p className={styles.slogan}>If you see something, or hear something, say something!</p>
        <div className={styles.buttons}>
          <Link legacyBehavior href="about#about">
            <motion.a className={isAboutHovered ? styles.transparent_btn_Hover : styles.button} 
            onMouseEnter={toggleAboutHover} 
            onMouseLeave={toggleAboutHover}
            animate={isAboutHovered ? "hovered" : "nonHovered"}
            variants={variants}>
            About Us</motion.a>
          </Link>
          <Link legacyBehavior href="about#tip_process">
            <motion.a className={isProcessHovered ? styles.transparent_btn_Hover : styles.button} 
            onMouseEnter={toggleProcessHover} 
            onMouseLeave={toggleProcessHover}
            animate={isProcessHovered ? "hovered" : "nonHovered"}
            variants={variants}>
            The Tip Process</motion.a>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default index


