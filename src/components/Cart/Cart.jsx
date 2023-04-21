import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    console.log(cart);
    const { img, jobTitle, jobDuration, jobQuality, company, location, salary, id } = cart;
    return (
        <div className="applied-container">
            <div className='applied-contaner-left-part'>
                <img className="company-img" src={img} alt="" />
                <div className='applied-info'>
                    <h4>{jobTitle}</h4>
                    <p>{company}</p>
                    <div className='button'>
                        <button>{jobQuality}</button>
                        <button>{jobDuration}</button>
                    </div>
                    <div className='location-salary'>
                        <p><img src="../../../public/Icons/Location Icon.png" alt="" />{location}</p>
                        <p><img src="../../../public/Icons/Frame.png" alt="" />${salary}</p>
                    </div>
                </div>
            </div>
            <p><Link className='view-details' to={`/jobdetaile/${id}`}>View Details </Link></p>
        </div>
    );
};

export default Cart;