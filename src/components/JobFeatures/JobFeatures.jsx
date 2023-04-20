import React, { useEffect, useState } from 'react';
import './JobFeatures.css';
import Feature from '../Feature/Feature';
import JobDetails from '../JobDetails/JobDetails';
// import JobDetails from '../JobDetails/JobDetails';

const JobFeatures = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('../../../public/JobFetures.json')
            .then(response => response.json())
            .then(data => setFeatures(data));
    }, []);
    const handleViewButton = features => {
        console.log(features);
    }
    // console.log(features);
    const sliceFeatures = features.slice(0, 4);
    return (
        <div>
            <div className='feature-container'>
                {
                    sliceFeatures.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                        handleViewButton={handleViewButton}
                    ></Feature>)
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default JobFeatures;