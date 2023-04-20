import React, { useEffect, useState } from 'react';
import './JobFeatures.css';
import Feature from '../Feature/Feature';
import JobDetails from '../JobDetails/JobDetails';

const JobFeatures = () => {
    const [features, setFeatures] = useState([]);
    // const handleAddToCart = id => {
    //     console.log(id);
    // }

    useEffect(() => {
        fetch('../../../public/JobFetures.json')
            .then(response => response.json())
            .then(data => setFeatures(data));
    }, []);
    
    const sliceFeatures = features.slice(0, 4);
    return (
        <div>
            <div className='feature-container'>
                {
                    sliceFeatures.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            {/* <div>
                {
                    sliceFeatures.map(ft => <JobDetails
                    key={ft.id}
                    handleAddToCart={handleAddToCart}
                    ></JobDetails>)
                }
            </div> */}
            
        </div>
    );
};

export default JobFeatures;