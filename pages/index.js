import styles from '../styles/home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {TwitterFollowButton} from 'react-twitter-embed';
import BackgroundSlider from 'react-background-slider';

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
      <BackgroundSlider images={["watervalley1.jpg", "coffeeville1.jpeg", "oakland1.jpeg", "watervalley2.jpg",  "coffeeville2.jpeg", "oakland2.jpeg", "coffeeville3.jpeg", "yalobusha.jpeg", "oakland3.jpeg", "coffeeville4.jpeg"]} transition={1} duration={5}/>
      <div className={styles.center}>
        <div className={styles.main}>
        <h1 className={styles.text}>Yalobusha County Crime Stoppers</h1>
        <p className={styles.slogan}>If you see something, or hear something, say something!</p>
        <div className={styles.buttons}>
          <Link href="about#about">
            <motion.a className={isAboutHovered ? styles.transparent_btn_Hover : styles.button} 
            onMouseEnter={toggleAboutHover} 
            onMouseLeave={toggleAboutHover}
            animate={isAboutHovered ? "hovered" : "nonHovered"}
            variants={variants}>
            About Us</motion.a>
          </Link>
          <Link href="about#tip_process">
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


