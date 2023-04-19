import React from 'react';
import './Jobcategory.css';

const Jobcategory = ({ jobcategory }) => {
    console.log(jobcategory)
    const { img, name, job_count } = jobcategory;
    return (
        <div>
            <div>
                
            </div>
            <div className='job-cart'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{job_count} Jobs Available</p>
            </div>
        </div>
    );
};

export default Jobcategory;