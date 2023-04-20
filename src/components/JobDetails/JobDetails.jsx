// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
    // const description = useLoaderData();
    // console.log(description);
    // const {jobDescription,responsibilities,requirements ,experiences } = description;s
    const { id } = useParams();
    const jobData = useLoaderData();
    const [jobs, setJobs] = useState({})
    useEffect(() => {
        if (jobData) {
            const checkData = jobData.find(jb => jb.id == id)
            setJobs(checkData);
        }
    }, [id])
    console.log(jobs);
    const { jobDescription, salary, requirements, responsibilities, experiences, jobTitle, phone, email, address } = jobs;
    return (
        <div className='job-feature-container'>
            <div className='job-feature-left-part'>
                <p><span>Job Description:</span>{jobDescription}</p>
                <p><span>Job Responsibility:</span>{responsibilities}</p>
                <h5>Educational Requirements:</h5>
                <p>{requirements}</p>
                <h5>Experiences:</h5>
                <p>{experiences}</p>
            </div>
            <div className='fob-feature-right-part'>
                <h2>Job Details</h2>
            </div>
        </div>
    );
};

export default JobDetails;