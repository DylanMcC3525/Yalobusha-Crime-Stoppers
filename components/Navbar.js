import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.nav}`}>
            <div className="container-fluid justify-content-between">
                <div className="d-flex align-items-center">
                    <Link legacyBehavior href="/"><a className={styles.noDecor}><img className={styles.logo} src="logo.gif"></img></a></Link>
                    <Link legacyBehavior href="/"><a className={`${styles.noDecor} ${styles.header} align-middle`}>Yalobusha County Crime Stoppers</a></Link>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarNavAltMarkup">
                    <div className={`${styles.collapsed} navbar-nav`}>
                        <Link legacyBehavior href="/about"><a className={`${styles.link}`} aria-current="page">About</a></Link>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar