import React, { useState, useEffect } from 'react';
import styles from './details.module.css';
import { useParams } from 'react-router';
import { API_URL_REPO } from '../../routes/routes';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

function Detail() {
    const navigate = useNavigate();

    const {repo_name} = useParams();
    const [repo, setRepo] = useState();

    const [commits, setCommits] = useState(0)

    const [isLoading, setIsLoading] = useState(true);

    // const options = {};
    // const series = [1,2,3,4,5]

    const state = {
        options: {
            chart: {
                id: "commits-chart"
            },
            xaxis: {
                type: 'datetime',
                // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
        },
        series: [{
            data: [
            {
                x: new Date('2018-01-14'),
                y: 1
            },
            {
                x: new Date('2018-01-14'),
                y: 2
            },
             
            {
                x: new Date('2018-03-12'),
                y: 6
            }
            ]
        }] 
    };

    useEffect(() => {
        const url = API_URL_REPO + '/' + repo_name;
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
            setRepo(payload);
        })
        .catch(error => console.log(error))

    }, []);

    useEffect(() => {
        const url = API_URL_REPO + '/' + repo_name + '/commits?author=marcosiraola';
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
            setCommits(payload);
            commitsData(payload);
        })
        .catch(error => console.log(error))

    }, []);

    const commitsData = (props) => {
        props.forEach(commit => {
            console.log('---------------')
            console.log(commit.commit.author)
            console.log(commit.commit.author.date)
            // state.series.data.push({x:commit.commit.author.date, y: 1})
        });
    }

    return (
        <div>
            <h1 className={styles.title}>{repo_name}</h1>
            <p onClick={() => navigate(-1)}> Volver </p>
            <span>Number of commits: {commits.length}</span>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
            />
        </div>
    )
}

export default Detail;