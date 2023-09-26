import React from 'react';

const DonatedCard = ({ aCard }) => {
    const { card_bg, category, category_bg, description, id, img, price, text_button_bg, title } = aCard;

    return (
        <div className='md:flex rounded-lg' style={{ backgroundColor: card_bg, }}>
            <img className='rounded-lg' src={img} alt="" />
            <div className='p-6'>
                <p className='font-normal text-sm px-2.5 py-1 rounded inline-block  ' style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</p>
                <h2 className='font-semibold text-2xl my-2'>{title}</h2>
                <p className='font-semibold text-base' style={{ color: text_button_bg }}>${price}.00 </p>
                <button className=' mt-5 text-white font-normal rounded text-lg px-4 py-2' style={{ backgroundColor: text_button_bg }}>View Details</button>
            </div>
        </div>
    );
};

export default DonatedCard;