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
                <img className={styles.msDPT} src="crimeLogo-2.png"></img>
            </div>
            <div>
            <p>Yalobusha Crime Stoppers</p>
            <p>Submit a Tip</p>
            <div className={styles.call}>
            <div>
            <a className={styles.icons} href="tel:18669338477"><i className='bx bx-phone-call bx-tada-hover'></i></a>
            
            {/* {isHovered && openEnvelope()}
            {!isHovered && closeEnvelope()} */}
            </div>
            <p className={styles.paragraph}><a href="tel:18669338477" className={styles.phoneLink} >Call: 1-866-933-TIPS (8477)</a></p>
            </div>
</div>

            <div className={styles.imgDIV}>
                <img className={styles.msDPT} src="DPS-logo.png"></img>
            </div>
            {/* <div className={styles.twitter}>
                <a target="_blank" className={styles.icons} href="https://www.twitter.com/YalobushaSO"><i class='bx bxl-twitter'></i></a>

            </div> */}


        </footer>
    )
}

export default Footer
