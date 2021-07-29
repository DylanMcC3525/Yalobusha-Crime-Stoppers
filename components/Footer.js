import styles from '../styles/footer.module.css'
import { useState } from "react"

const Footer = () => {
        const [isHovered, setIsHovered] = useState(false);
        
        const openEnvelope = () => {
            
            return <a href="us@gmail.com"><box-icon  size="lg" border="circle" name='envelope-open' onMouseLeave={() => {setIsHovered(false)}}></box-icon></a>
        }
        const closeEnvelope = () => {
            
            return <box-icon   size="lg" id="envelope" name='envelope' border="circle" onMouseOver={() => {setIsHovered(true)}}></box-icon>
        }
    return (
        <footer className={styles.footer}>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
     
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
            <div className={styles.imgDIV}>
                <img className={styles.crimeLogo} src="crimeLogo3.png"></img>
            </div>
            <div>
            <p className={styles.headers}>Yalobusha Crime Stoppers</p>
            <p className={styles.headers}>Submit a Tip</p>
            <div className={styles.call}>
            <div>
            <a className={styles.icons} href="tel:18669338477"><i className='bx bx-phone-call bx-tada-hover'></i></a>
                
            </div>
            <p className={styles.paragraph}><a href="tel:18669338477" className={styles.phoneLink} >Call: 1-866-933-TIPS (8477)</a></p>
            </div>
</div>

            <div className={styles.imgDIV}>
                <img className={styles.msDPT} src="DPS-logo.png"></img>
                <p className={styles.links}>Developed By: <a className={styles.links} href="https://dylanmcc3525.github.io/">Dylan McCreary</a>, <a className={styles.links} href="https://www.sethhogue.com/">Seth Hogue</a>, <a className={styles.links} href="https://travis-alexander.github.io/">Travis Alexander</a></p>

            </div>

        </footer>
    )
}

export default Footer
