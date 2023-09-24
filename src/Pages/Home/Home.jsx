import React from 'react';
import './Home.css'
import Header from '../../Component/Header/Header';
import Banner from '../../Component/Banner/Banner';
import { Outlet } from 'react-router-dom';
import DonationCards from '../../Component/DonationCards/DonationCards';

const Home = () => {
    return (
        <>
            <section className='bg-banner container mx-auto px-10'>
                <Header></Header>
                <Banner></Banner>
            </section>
            <div>
                <DonationCards></DonationCards>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Home;