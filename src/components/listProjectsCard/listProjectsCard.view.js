import React from 'react';
import styles from './listProjectsCard.module.css';
import ProjectCard from '../projectsCard/ProjectCard.view';

const ListProjectsCard = ({repos}) => {

    return (
        <div className={styles.projects_container}>
            {repos && repos.map(repo => {
                return (
                    <ProjectCard
                        key={ repo.id } 
                        repo={ repo.name } 
                        branch={ repo.default_branch }
                        language={ repo.language }
                        update={ repo.updated_at }
                        url={ repo.html_url }
                    />
                );
            })}
        </div>
    )
}

export default ListProjectsCard;