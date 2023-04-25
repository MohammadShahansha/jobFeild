import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Remotes = () => {
    const jobs = useLoaderData();
    const remoteJobs = jobs.filter(job => job.jobQuality === 'Remote');
    console.log(remoteJobs);
    return (
        <div>
            {
                remoteJobs.map(cart => <Cart
                    key={cart.id}
                    cart={cart}
                ></Cart>)
            }
        </div>
    );
};

export default Remotes;