import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav-container'>
            <h2>Job Feild</h2>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applie-job">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
                
            </div>
            <button>Star Applying</button>
        </nav>
    );
};

export default Header;