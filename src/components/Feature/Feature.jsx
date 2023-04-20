import React from 'react';
import './Feature.css';
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';
// import JobDetails from '../JobDetails/JobDetails';
// import { Link } from 'react-router-dom';

const Feature = ({feature}) => {
    // console.log(feature);
    const {img,jobTitle,company,location,salary,id} = feature;
    return (
        <div className='features'>
            <img src={img} alt="" />
            <h2>{jobTitle}</h2>
            <p className='company'>{company}</p>
            <div className='two-button'>
                <button>Remote</button>
                <button className='full-time'>Full Time</button>
            </div>
            <div className='locaton-salary'>
            <img src="../../../public/Icons/Location Icon.png" alt="" />
                <p>{location}</p>
                <p>Salary:${salary}</p>
            </div>
           <p><Link to={`/jobdetaile/${id}`}>View Details</Link></p>
            
            
        </div>
    );
};

export default Feature;