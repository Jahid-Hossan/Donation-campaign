import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { ImMenu, ImCross } from 'react-icons/im';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(true);

    return (
        <section className='container mx-auto mt-4 px-10'>
            <nav className='flex flex-row-reverse lg:flex-row justify-between items-center'>

                <img className='h-8 md:h-16' src={logo} alt="" />

                <div>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute bg-white lg:gap-12 text-lg font-bold p-5 absolute lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        < li><NavLink to="/" >Home</NavLink></li>

                        <li><NavLink to="/donation"  >Donation</NavLink></li>

                        <li><NavLink to="/statistics"  >Statistics</NavLink></li>

                    </ul>
                </div>


                {/* <ul className='flex gap-12 text-lg font-bold'>
                    <li><NavLink to="/" >Home</NavLink></li>

                    <li><NavLink to="/donation"  >Donation</NavLink></li>

                    <li><NavLink to="/statistics"  >Statistics</NavLink></li>

                </ul> */}
            </nav>
        </section>
    );
};

export default Header;