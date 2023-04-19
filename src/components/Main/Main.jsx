import React from 'react';
import './Main.css';
import Jobcategory from '../Jobcategory/Jobcategory';

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className='left-part'>
                    <h1>One Step Closer To Your Dream Job</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="../../../public/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <Jobcategory></Jobcategory>
        </main>
    );
};

export default Main;