import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-container'>
            <h2>Job Feild</h2>
            <div className='links'>
                <a href="/">Home</a>
                <a href="/statistics">Statistics</a>
                <a href="/applie-job">Applied Jobs</a>
                <a href="/blog">Blog</a>
            </div>
            <button>Star Applying</button>
        </nav>
    );
};

export default Header;