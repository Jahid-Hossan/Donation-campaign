
import { useState } from 'react';
import DonationCard from './../DonationCard/DonationCard';

const DonationCards = ({ allDonationsCards }) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto py-10'>
            {
                allDonationsCards.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;