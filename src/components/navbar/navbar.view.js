import React from 'react'
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import { HOME, DETAIL } from '../../routes/routes.js';
import logo from '../../assets/logo512.png';
import { useTranslation, Trans } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    return (

        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="react logo" />
            <ul className={styles.ulist}>
                <Link to={HOME}>
                    <li>{ t('navbar.sidebar_1') }</li>
                </Link>
                <Link to={DETAIL}>
                    <li>{ t('navbar.sidebar_2') }</li>
                </Link>
            </ul>
            <div className={styles.language_container}>
                <button 
                    className={i18n.language == 'en' ? styles.button_active : styles.button} 
                    onClick={() => i18n.changeLanguage('en')}
                >
                    EN
                </button>
                <button 
                    className={i18n.language == 'es' ? styles.button_active : styles.button}
                    onClick={() => i18n.changeLanguage('es')}
                >
                    ES
                </button>
            </div>
        </div>
        
    )
}

export default Navbar