import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Onsites = () => {
    const jobs = useLoaderData();
    const onsiteJobs = jobs.filter(job => job.jobQuality === 'Onsite');
    console.log(onsiteJobs);
    return (
        <div>
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