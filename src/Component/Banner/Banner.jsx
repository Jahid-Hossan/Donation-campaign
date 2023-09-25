import { useEffect, useState } from "react";

import './Banner.css'
import DonationCards from "../DonationCards/DonationCards";
const Banner = () => {
    const [allDonationsCards, setAllDonationsCards] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllDonationsCards(data))
    }, []);

    const handleSearch = (e) => {
        e.preventDefault()
        const inputValue = e.target.search.value;
        const searchedItem = allDonationsCards.filter(aCard => aCard.category === inputValue.toLowerCase());
        console.log(searchedItem);
        if (searchedItem.length > 0) {
            setAllDonationsCards(searchedItem)
            console.log(allDonationsCards);
        }
        else {
            alert('No Data Found')
        }
    };
    return (
        <section className="container mx-auto p-10" >
            <div className=' bg-banner text-center pt-32 pb-52 vs '>
                <h2 className='font-bold text-5xl'>I Grow By Helping People In Need</h2>
                <form onSubmit={handleSearch} action="" className='mt-10    '>
                    <input type="text" placeholder='Search here....' className='p-4 border-gray-300 border-y-2 border-l-2 rounded-l-lg w-96' name="search" />
                    <button type="submit" className=' text-white py-4 px-7 border-2 border-[#FF444A] bg-[#FF444A] rounded-r-lg' type='submit'>Search</button>
                </form>
            </div>
            <DonationCards allDonationsCards={allDonationsCards} ></DonationCards>
        </section>
    );
};

export default Banner;