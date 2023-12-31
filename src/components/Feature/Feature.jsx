import React from 'react';
import './Feature.css';
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {
    const { img, jobTitle, jobDuration, jobQuality, company, location, salary, id } = feature;

    console.log(feature);
    return (
        <div className='features'>
            <img src={img} alt="" />
            <h2>{jobTitle}</h2>
            <p className='company'>{company}</p>
            <div className='two-button'>
                <button>{jobQuality}</button>
                <button className='full-time'>{jobDuration}</button>
            </div>
            <div className='locaton-salary'>
                <img src="/Icons/Location Icon.png" alt="" />
                <p>{location}</p>
                <p>Salary:${salary}</p>
            </div>
            <p><Link className='view-details' to={`/jobdetaile/${id}`}>View Details</Link></p>

        </div>
    );
};

export default Feature;