import React from 'react';
import styles from './listProjectsCard.module.css';
import ProjectCard from '../projectsCard/ProjectCard.view';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';

const ListProjectsCard = ({repos}) => {

    return (
        
        <div className={styles.projects_container}>
            {repos === null ?
                <>
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                    <Skeleton className={styles.skeleton} active />
                </>
                :
                <>
                    {repos && repos.map(repo => 
                        <ProjectCard
                            key={ repo.id } 
                            repo={ repo.name } 
                            branch={ repo.default_branch }
                            language={ repo.language }
                            update={ repo.updated_at }
                            url={ repo.html_url }
                        />
                    )}
                </>
            }
        </div>
    )
}

export default ListProjectsCard;