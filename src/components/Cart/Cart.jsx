import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {
    console.log(cart);
    const {img,jobTitle,jobDuration ,jobQuality,company,location,salary}= cart;
    return (
        <div  className="applied-container">
            <div className='applied-contaner-left-part'>
                <img className="company-img" src={img} alt="" />
                <div className='applied-info'>
                    <h4>{jobTitle}</h4>
                    <p>{company}</p>
                    <button>{jobQuality}</button>
                    <button>{jobDuration}</button>
                    <div className='location-salary'>
                        <p><img src="../../../public/Icons/Location Icon.png" alt="" />{location}</p>
                        <p><img src="../../../public/Icons/Frame.png" alt="" />${salary}</p>
                    </div>
                </div>
            </div>
            <p><Link>View Details </Link></p>
        </div>
    );
};

export default Cart;