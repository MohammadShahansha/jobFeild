import React from 'react';
import './Main.css';
import Jobcategory from '../Jobcategory/Jobcategory';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <main>
            <div className="main-container">
                <div className='left-part'>
                    <h1>One Step Closer To Your <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="../../../public/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <div className='job-category'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='job-category-list'>

                {
                    data.map(jobcategory => <Jobcategory
                        key={jobcategory.id}
                        jobcategory={jobcategory}
                    ></Jobcategory>)
                }
            </div>
        </main>
    );
};

export default Main;