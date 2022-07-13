import React from 'react'
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import { HOME, DETAIL } from '../../routes/routes.js';
import logo from '../../assets/logo512.png'

const Navbar = () => {
    return (

        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="react logo" />
            <ul className={styles.ulist}>
                <Link to={HOME}>
                    <li>Projects</li>
                </Link>
                <Link to={DETAIL}>
                    <li>Detail</li>
                </Link>
            </ul>
        </div>
        
    )
}

export default Navbar