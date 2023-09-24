import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <section>
            <nav className='flex justify-between items-center'>
                <img className=' h-16' src={logo} alt="" />
                <ul className='flex gap-12 text-lg font-bold'>
                    <li><NavLink to="/" >Home</NavLink></li>

                    <li><NavLink to="/donation"  >Donation</NavLink></li>

                    <li><NavLink to="/statistics"  >Statistics</NavLink></li>

                </ul>
            </nav>
        </section>
    );
};

export default Header;