import { useLoaderData, useParams } from "react-router-dom";
import './DonationDetails.css'
import { setDonationData } from '../../Utilites/Utilites'

const DonationDetails = () => {
    const param = useParams();
    const donationId = param.id;
    const donationsDetails = useLoaderData();
    const donationDetails = donationsDetails.find((donation) => donation.id == donationId);
    const { card_bg, category, category_bg, description, id, img, price, text_button_bg, title } = donationDetails;

    const handleDonate = (donation) => {
        setDonationData(donation)
    }

    return (

        <div className="container mx-auto px-10 ">
            <div className=" relative">
                <img className="w-full  my-9" src={img} alt="" />
                <div className="bg-DonationDetails w-full py-9 pl-9 absolute bottom-0">
                    <button onClick={() => handleDonate(donationDetails)} className="btn  text-white text-xl font-semibold border-none  items-center" style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
                </div>

            </div>

            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="font-normal text-base text-gray-500 ">{description}</p>
        </div >
    );
};

export default DonationDetails;