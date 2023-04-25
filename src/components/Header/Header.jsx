import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='nav-container'>
            <h1>Job Feild</h1>
            <div className='links'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applie-job">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
                
            </div>
            <button>Star Applying</button>
        </nav>
    );
};

export default Header;