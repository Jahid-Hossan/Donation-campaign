import { useLoaderData } from 'react-router-dom';
import DonationCard from '../DonationCard/DonationCard';

const DonationCards = () => {
    const allDonationsCards = useLoaderData();

    return (
        <div>
            {
                allDonationsCards.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;