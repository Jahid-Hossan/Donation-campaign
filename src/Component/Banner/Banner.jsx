import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import './Banner.css'
import DonationCards from "../DonationCards/DonationCards";
import { useLoaderData } from "react-router-dom";
const Banner = () => {
    const [allDonationsCards, setAllDonationsCards] = useState([]);

    const allData = useLoaderData()
    useEffect(() => {
        setAllDonationsCards(allData)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        const inputValue = e.target.search.value;
        e.target.search.value = '';
        const searchedItem = allData.filter(aCard => aCard.category === inputValue.toLowerCase());
        if (searchedItem.length > 0) {
            setAllDonationsCards(searchedItem)
        }
        else {
            setAllDonationsCards(allData)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Keyword!',
                footer: 'Searched item will be reset'
            })
        }
    };
    console.log(allDonationsCards)
    return (
        <section className="container mx-auto p-3 md:p-6 lg:p-10" >
            <div className=' bg-banner text-center py-10 md:pb-32 md:pt-20 lg:pt-32 lg:pb-52'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-5xl'>I Grow By Helping People In Need</h2>
                <form onSubmit={handleSearch} action="" className='mt-10    '>
                    <input type="text" placeholder='Search here....' className='p-2 md:p-4 border-gray-300 border-y-2 border-l-2 rounded-l-lg lg:w-96' name="search" />
                    <button className=' text-white py-2 md:py-4 px-4 md:px-7 border-2 border-[#FF444A] bg-[#FF444A] rounded-r-lg' type='submit'>Search</button>
                </form>
            </div>
            <DonationCards allDonationsCards={allDonationsCards} ></DonationCards>
        </section>
    );
};

export default Banner;