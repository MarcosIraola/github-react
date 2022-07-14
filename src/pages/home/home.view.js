import React, {useEffect, useState} from 'react';
import styles from './home.module.css';
import ListProjectsCard from '../../components/listProjectsCard/listProjectsCard.view';
import { API_URL } from '../../routes/routes';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

const Home = () => {

    const { t } = useTranslation();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [jsRepos, setJsRepos] = useState(0);
    const [vueRepos, setVueRepos] = useState(0);
    const [phpRepos, setPhpRepos] = useState(0);
    const [cssRepos, setCssRepos] = useState(0);
    const [javaRepos, setJavaRepos] = useState(0);
    const [otherRepos, setOtherRepos] = useState(0);

    const [langs, setLangs] = useState([]);

    const state = {
        options: {},
        series: [jsRepos, vueRepos, phpRepos, cssRepos, javaRepos, otherRepos],
        labels: langs
    }

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
            setUser(payload);
            setIsLoading(false);
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
            setRepos(payload);
            sumProjects(payload);
        })
        .catch(error => console.log(error))

    }, []);

    const sumProjects = (props) => {

        let js = 0;
        let vue = 0;
        let php = 0;
        let css = 0;
        let java = 0;
        let other = 0;

        props.forEach(repo => {
            
            if(!langs.includes(props.language)){
                langs.push(props.language);
            }

            if(repo.language == "JavaScript") {
                js = js + 1;
                setJsRepos(js);
            }

            if(repo.language == "Vue") {
                vue = vue + 1;
                setVueRepos(vue);
            }

            if(repo.language == "PHP") {
                php = php + 1;
                setPhpRepos(php);
            }

            if(repo.language == "CSS") {
                css = css + 1;
                setCssRepos(css);
            }

            if(repo.language == "Java") {
                java = java + 1;
                setJavaRepos(java);
            }

            if(repo.language == null) {
                other = other + 1;
                setOtherRepos(other);
            }
        });
    }
    
    return (
        <div className={styles.home}>
            <p className={styles.title}>{ t('home.title') }</p>

            <div className={styles.user_container}>
                {isLoading ?
                    <Skeleton className={styles.skeleton} active />
                    :
                    <>
                        <p>{ t('home.name') }: { user?.name }</p>
                        <p>{ t('home.company') }: { user?.company }</p>
                        <p>{ t('home.location') }: { user?.location }</p>
                        <p>{ t('home.public_repos') }: { user?.public_repos }</p>
                        <p>{ t('home.bio') }: { user?.bio }</p>
                    </>
                }
            </div>

            <Chart options={state.options} series={state.series} labels={state.labels} type="donut" width="380" />

            <div className={styles.repos_container}>
                <ListProjectsCard repos={ repos }/>
            </div>
        </div>
    )
}

export default Home;