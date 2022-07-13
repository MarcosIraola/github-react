import React, {useEffect, useState} from 'react';
import styles from './home.module.css';
import ListProjectsCard from '../../components/listProjectsCard/listProjectsCard.view';

const Home = () => {

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState();

    useEffect(() => {
        const url = "https://api.github.com/users/marcosiraola";
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
        const url = "https://api.github.com/users/marcosiraola/repos";
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
            console.log(payload[0])
            setRepos(payload)
        })
        .catch(error => console.log(error))

    }, []);
    
    return (
        
        <div className={styles.home}>
            <p className={styles.title}>Projects</p>
            <div className={styles.user_container}>
                <p>Name: {user?.name}</p>
                <p>Company: {user?.company}</p>
                <p>Location: {user?.location}</p>
                <p>Public repos: {user?.public_repos}</p>
            </div>

            <div className={styles.repos_container}>
                <ListProjectsCard repos={ repos }/>
            </div>
        </div>

    )
}

export default Home;