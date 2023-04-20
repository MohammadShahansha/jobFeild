import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const savedElement = useLoaderData();
    console.log(savedElement);
    return (
        <div>
            <h1>this is applied job section{savedElement.length}</h1>
        </div>
    );
};

export default AppliedJob;