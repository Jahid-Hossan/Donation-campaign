import React, { useEffect, useState } from 'react';
import { getDonationData } from '../../Utilites/Utilites';
import DonatedCard from '../../Component/DonatedCard/DonatedCard';

const Donation = () => {
    const [donatedCard, setDonatedCard] = useState([])
    useEffect(() => {
        const getDonatedData = getDonationData();
        setDonatedCard(getDonatedData);
    }, [])

    return (
        <div className='container mx-auto '>
            <div className='p-2 md:p-4 grid lg:grid-cols-2 my-2 gap-6 container mx-auto '>
                {
                    donatedCard.map(aCard => <DonatedCard key={aCard.id} aCard={aCard}></DonatedCard>)
                }
            </div>
            <button className='card-actions mt-5 mx-auto text-white font-normal rounded text-lg px-4 py-2 text-right bg-green-600'>See All</button>
        </div>

    );
};

export default Donation;