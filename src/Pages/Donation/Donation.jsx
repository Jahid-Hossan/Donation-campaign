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
    const isEmpty = shortDonatedCard.length === 0;
    console.log(isEmpty);
    const areAny = shortDonatedCard.length <= 4;
    useEffect(() => {

        if (isShowAll) {
            const shorted = shortDonatedCard.slice(0, 4);
            setDonatedCard(shorted);
        } else {
            setDonatedCard(shortDonatedCard);
        }
    }, [isShowAll, shortDonatedCard])

    const handleSeeAll = (a) => {
        setIsShowAll(false)
    }

    return (
        <div className='container mx-auto '>
            {

                isEmpty ? <div className='grid justify-center mx-auto gap-2 md:gap-4 lg:gap-8  mt-4'>
                    <img className='mx-auto' src="https://i.ibb.co/yRzgmd7/download.png" alt="" />
                    <h2 className="font-bold text-center   text-2xl md:text-3xl lg:text-4xl">You didn't make any donation yet!!!</h2></div> :
                    <div>
                        <div className='p-2 md:p-4 grid md:grid-cols-2 my-2 gap-6 container mx-auto '>
                            {
                                donatedCard.map(aCard => <DonatedCard key={aCard.id} aCard={aCard}></DonatedCard>)
                            }
                        </div>
                        <button onClick={() => handleSeeAll(true)} className='card-actions mt-5 mx-auto text-white font-normal rounded text-lg px-4 py-2  bg-green-600' style={{ display: !isShowAll || areAny ? 'none' : '' }} >See All</button>
                    </div>

            }
        </div>

    );
};

export default Donation;