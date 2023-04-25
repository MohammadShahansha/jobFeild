import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './AppliedJob.css';
const AppliedJob = () => {
    const carts = useLoaderData();
    // console.log(carts);
    return (
        <div className='applied'>
            <h1>Applied Job</h1>
            <div className='cart'>
                <div className='seeAppliedJob'>
                    <Link className='seeRemoteJob' to={`/seeRemoteJob`}>See Remote Job</Link>
                    <Link className='seeOnsiteJob' to={`/seeOnsiteJob`}>See Onsite Job</Link>
                </div>
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