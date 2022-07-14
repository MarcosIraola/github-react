import React, {useEffect, useState} from 'react';
import styles from './home.module.css';
import ListProjectsCard from '../../components/listProjectsCard/listProjectsCard.view';
import { API_URL } from '../../routes/routes';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';


const Home = () => {

    const { t } = useTranslation();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);

    // const [githubUser, setGithubUser] = useState(API_URL);
    // console.log(githubUser);

    useEffect(() => {
        const url = API_URL;
        const options = {
            method: 'GET',
            headers: new Headers()
        };

        fetch(url, options)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return Promise.reject(response.status)
        })
        .then(payload => {
            setUser(payload)
        })
        .catch(error => console.log(error))

    }, []);

    useEffect(() => {
        const url = API_URL + "/repos";
        const options = {
            method: 'GET',
            headers: new Headers()
        };

        fetch(url, options)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return Promise.reject(response.status)
        })
        .then(payload => {
            setRepos(payload)
        })
        .catch(error => console.log(error))

    }, []);
    
    return (
        <div className={styles.home}>
            <p className={styles.title}>{ t('home.title') }</p>

            <div className={styles.user_container}>
                {user === null ?
                    <Skeleton className={styles.skeleton} active />
                    :
                    <>
                        <p>{ t('home.name') }: { user?.name }</p>
                        <p>{ t('home.company') }: { user?.company }</p>
                        <p>{ t('home.location') }: { user?.location }</p>
                        <p>{ t('home.public_repos') }: { user?.public_repos }</p>
                    </>
                }
            </div>

            <div className={styles.repos_container}>
                <ListProjectsCard repos={ repos }/>
            </div>
        </div>
    )
}

export default Home;