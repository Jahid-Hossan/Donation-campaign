import React, { useEffect, useState } from 'react';
import { getDonationData } from '../../Utilites/Utilites';
import DonatedCard from '../../Component/DonatedCard/DonatedCard';

const Donation = () => {
    const [donatedCard, setDonatedCard] = useState([]);
    const [shortDonatedCard, setShortDonatedCard] = useState([]);
    const [isShowAll, setIsShowAll] = useState('false')

    useEffect(() => {
        const getDonatedData = getDonationData();
        setShortDonatedCard(getDonatedData);

    }, [])

    const areAny = shortDonatedCard.length <= 4;
    useEffect(() => {

        if (isShowAll) {
            const shorted = shortDonatedCard.slice(0, 4);
            setDonatedCard(shorted);
            console.log(shorted);
        } else {
            setDonatedCard(shortDonatedCard);
        }
    }, [isShowAll, shortDonatedCard])

    const handleSeeAll = (a) => {
        setIsShowAll(false)
    }

    return (
        <div className='container mx-auto '>
            <div className='p-2 md:p-4 grid lg:grid-cols-2 my-2 gap-6 container mx-auto '>
                {
                    donatedCard.map(aCard => <DonatedCard key={aCard.id} aCard={aCard}></DonatedCard>)
                }
            </div>
            <button onClick={() => handleSeeAll(true)} className='card-actions mt-5 mx-auto text-white font-normal rounded text-lg px-4 py-2  bg-green-600' style={{ display: !isShowAll || areAny ? 'none' : '' }} >See All</button>
        </div>

    );
};

export default Donation;