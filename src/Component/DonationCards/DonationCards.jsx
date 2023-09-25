
import { useEffect, useState } from 'react';
import DonationCard from '../DonationCard/DonationCard';


const DonationCards = () => {
    const [allDonationsCards, setAllDonationsCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllDonationsCards(data))
    }, []);

    return (
        <div className='grid grid-cols-4 gap-6 container mx-auto py-10'>
            {
                allDonationsCards.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
            }

        </div>
    );
};

export default DonationCards;