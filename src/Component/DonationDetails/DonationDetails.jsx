import { useLoaderData, useParams } from "react-router-dom";
import './DonationDetails.css'
import { setDonationData } from '../../Utilites/Utilites'

const DonationDetails = () => {
    const param = useParams();
    const donationId = param.id;
    const donationsDetails = useLoaderData();
    const donationDetails = donationsDetails.find((donation) => donation.id == donationId);
    const { description, img, price, text_button_bg, title } = donationDetails;

    const handleDonate = (donation) => {
        setDonationData(donation)
    }

    return (

        <div className="container mx-auto px-5 lg:px-10  ">
            <div className=" z-0 relative">
                <img className="w-full  my-9" src={img} alt="" />
                <div className="bg-DonationDetails w-full py-2 pl-2 md:py-4 md:pl-4 lg:py-9 lg:pl-9 absolute bottom-0">
                    <button onClick={() => handleDonate(donationDetails)} className="btn  text-white text-lg md:text-xl font-semibold border-none  items-center" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
                </div>

            </div>

            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h1>
            <p className="font-normal text-base text-gray-500 ">{description}</p>
        </div >
    );
};

export default DonationDetails;