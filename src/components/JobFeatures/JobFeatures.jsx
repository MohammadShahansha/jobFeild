import React, { useEffect, useState } from 'react';
import './JobFeatures.css';
import Feature from '../Feature/Feature';
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';

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
           <span><Link className='seeAllJob' to={`/seeAllJob`}>See All Job</Link></span>
            
        </div>
    );
};

export default JobFeatures;