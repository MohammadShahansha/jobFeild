
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { addToDb } from '../../Utilities/FackeDb';

const JobDetails = () => {
    const handleAddToCart = id => {
        console.log(id);
        addToDb(id);
    }
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
    const { jobDescription, salary, requirements, responsibilities, experiences, jobTitle, phone, email, address, location } = jobs;
    return (
        <div>
            <div className='job-feature-container'>
                <div className='job-feature-left-part'>
                    <p><span>Job Description:</span>{jobDescription}</p>
                    <p><span>Job Responsibility:</span>{responsibilities}</p>
                    <h5>Educational Requirements:</h5>
                    <p>{requirements}</p>
                    <h5>Experiences:</h5>
                    <p>{experiences}</p>
                </div>
                <div>
                    <div className='fob-feature-right-part'>
                        <h2>Job Details</h2>
                        <hr />
                        <div className='salary-detailees info'>
                            <img src="/Icons/Frame.png" alt="" />
                            <h5>Salary:</h5>
                            <p>{salary}(per month)</p>
                        </div>
                        <div className='title-detailes info'>
                            <img src="/Icons/Frame-1.png" alt="" />
                            <h5>Job Title:</h5>
                            <p>{jobTitle}</p>
                        </div>
                        <h5>Contact Information</h5>
                        <hr />
                        <div className='phone-detailes info'>
                            <img src="/Icons/Frame-2.png" alt="" />
                            <h5>Phone:</h5>
                            <p>{phone}</p>
                        </div>
                        <div className='email-detailes info'>
                            <img src="/Icons/Frame-3.png" alt="" />
                            <h5>Email:</h5>
                            <p>{email}</p>
                        </div>
                        <div className='address-detailes info'>
                            <img src="/Icons/Frame-4.png" alt="" />
                            <h5>Address:</h5>
                            <p>{address}</p>
                        </div>
                        <p className='location'>{location}</p>
                    </div>
                    <button
                    onClick={()=>handleAddToCart(jobs.id)}
                    type='button'
                     className='apply-button'
                     >
                        Apply Now
                    </button>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;