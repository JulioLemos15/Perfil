import {FaLinkedin, FaGithub} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li >
                    <FaGithub  /> <br /> <a href="https://github.com/JulioLemos15">Github</a>
                </li>
                <li>
                    <FaLinkedin /> <br /> <a href="https://www.linkedin.com/in/julio-lemos-91630722b/">Linkedin</a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>José Julio Arantes de Lemos</span> 
                &copy; 2022
            </p>
        </footer>
    )
}
export default Footer