import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <section className='conteiner mx-auto p-10'>
            <nav className='flex justify-between items-center'>
                <img src="/src/assets/Logo.png" alt="" />
                <ul className='flex gap-12 text-lg font-bold'>
                    <li><NavLink to="/" >Home</NavLink></li>

                    <li><NavLink to="/donation"  >Donation</NavLink></li>

                    <li><NavLink to="/statistics"  >Statistics</NavLink></li>

                </ul>
            </nav>
        </section>
    );
};

export default Home;