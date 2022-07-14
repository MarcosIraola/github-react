import React, { useEffect, useState } from 'react';
import styles from './projectCard.module.css';
import { useTranslation } from 'react-i18next';
import Javascript from '../../assets/javascript.png';
import Vue from '../../assets/vue.png';
import Java from '../../assets/java.png';
import CSS from '../../assets/css.png';
import html from '../../assets/html.png';
import PHP from '../../assets/php.png';

const ProjectCard = ( props ) => {

    const { t } = useTranslation();

    const dynamicImages = (param) => {
        switch(param) {
            case 'JavaScript':
                return Javascript;
            case 'Vue':
                return Vue;
            case 'Java':
                return Java;
            case 'CSS':
                return CSS;
            case 'PHP':
                return PHP;
            default:
                return null;
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>{ props.repo }</p>
            <p>{ t('repos_card.branch') }: { props.branch }</p>
            <p>{ t('repos_card.language') }: { props.language }</p>
            <p>{ t('repos_card.update') }: { props.update }</p>
            <a className={ styles.url } href={props.url}>{ t('repos_card.goto') }</a>
            
            {
                props.language ?
                <img className={styles.logo} src={dynamicImages(props.language)} alt='Lang logo' />
                :
                <></>
            }

        </div>
    )
}

export default ProjectCard
