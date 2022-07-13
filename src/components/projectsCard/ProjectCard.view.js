import React from 'react';
import styles from './projectCard.module.css';

const ProjectCard = ( props ) => {
    return (

        <div className={styles.container}>
            <p className={styles.title}>{ props.repo }</p>
            <p>Branch: { props.branch }</p>
            <p>Language: { props.language }</p>
            <p>Last update: { props.update }</p>
            {/* <a href={props.url}>Go to</a> */}
        </div>

    )
}

export default ProjectCard
