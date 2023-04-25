import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Onsites = () => {
    const jobs = useLoaderData();
    const onsiteJobs = jobs.filter(job => job.jobQuality === 'Onsite');
    console.log(onsiteJobs);
    return (
        <div className='applied'>
            <h1>Applied Job</h1>
            <div className='seeAppliedJob'>
                    <Link className='seeRemoteJob' to={`/seeRemoteJob`}>See Remote Job</Link>
                    <Link className='seeOnsiteJob' to={`/seeOnsiteJob`}>See Onsite Job</Link>
                </div>
            {
                onsiteJobs.map(cart => <Cart
                    key={cart.id}
                    cart={cart}
                ></Cart>)
            }
        </div>
    );
};

export default Onsites;