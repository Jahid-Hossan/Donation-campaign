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
        <div className='grid lg:grid-cols-2 my-6 gap-6 container mx-auto '>
            {
                donatedCard.map(aCard => <DonatedCard key={aCard.id} aCard={aCard}></DonatedCard>)
            }
        </div>
    );
};

export default Donation;