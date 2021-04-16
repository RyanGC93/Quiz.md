import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <>
            < div className={styles.footer} >
                <div className={styles.linksContainer}>
                <FaLinkedin className={styles.icon} onClick={() => window.location.href = 'https://www.linkedin.com/in/ryan-conk-8084b4103/'}/>
        <FaGithubSquare className={styles.icon} onClick={() => window.location.href = 'https://github.com/RyanGC93'} />
                </div>
            </div>
        </>    
    )
}
export default Footer
