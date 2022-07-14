import React from 'react';
import styles from './projectCard.module.css';
import { useTranslation } from 'react-i18next';

const ProjectCard = ( props ) => {

    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <p className={styles.title}>{ props.repo }</p>
            <p>{ t('repos_card.branch') }: { props.branch }</p>
            <p>{ t('repos_card.language') }: { props.language }</p>
            <p>{ t('repos_card.update') }: { props.update }</p>
            <a className={ styles.url } href={props.url}>{ t('repos_card.goto') }</a>
        </div>
    )
}

export default ProjectCard
