import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donationCard }) => {
    console.log(donationCard);
    const { card_bg, category, category_bg, description, id, img, price, text_button_bg, title } = donationCard;



    return (
        <Link to={`/${id}`}>
            <div className='rounded-lg cursor-pointer ' style={{ backgroundColor: card_bg }} >
                <img className='w-full' src={img} alt="" />
                <div className='p-4'>
                    <h4 className='px-4 py-1 w-fit my-2 text-sm font-medium rounded-md' style={{ color: text_button_bg, backgroundColor: category_bg }}>{category}</h4>
                    <h2 className='text-xl font-semibold' style={{ color: text_button_bg }}>{title}</h2>
                </div>

            </div>
        </Link>
    );
};

export default DonationCard;