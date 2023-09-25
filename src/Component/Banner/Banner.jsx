import DonationCards from "../DonationCards/DonationCards";
import './Banner.css'
const Banner = () => {



    return (
        <section className="container mx-auto p-10" >
            <div className=' bg-banner text-center pt-32 pb-52 vs '>
                <h2 className='font-bold text-5xl'>I Grow By Helping People In Need</h2>
                <form action="" className='mt-10    '>
                    <input type="text" placeholder='Search here....' className='p-4 border-gray-300 border-y-2 border-l-2 rounded-l-lg w-96' />
                    <button className=' text-white py-4 px-7 border-2 border-[#FF444A] bg-[#FF444A] rounded-r-lg' type='submit'>Search</button>
                </form>
            </div>
            <DonationCards></DonationCards>
        </section>
    );
};

export default Banner;