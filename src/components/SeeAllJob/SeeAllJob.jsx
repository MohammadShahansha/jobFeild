import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const SeeAllJob = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('/JobFetures.json')
            .then(response => response.json())
            .then(data => setFeatures(data));
    }, []);
    // console.log(features);
    return (
        <div>
            <div className='feature-container'>
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default SeeAllJob;