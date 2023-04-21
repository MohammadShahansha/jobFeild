import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './AppliedJob.css';
const AppliedJob = () => {
    const carts = useLoaderData();
    // console.log(carts);
    return (
        <div className='applied'>
            <h1>Applied Job</h1>
            <div>
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;