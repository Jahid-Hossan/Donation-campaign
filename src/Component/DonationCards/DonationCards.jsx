
import { useState } from 'react';
import DonationCard from './../DonationCard/DonationCard';

const DonationCards = ({ allDonationsCards }) => {
    // { allDonationsCards }
    console.log(allDonationsCards);
    // const [donationsCards, setDonationsCards] = useState([]);
    // setDonationsCards(allDonationsCards)

    return (
        <div className='grid grid-cols-4 gap-6 container mx-auto py-10'>
            {
                allDonationsCards.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;