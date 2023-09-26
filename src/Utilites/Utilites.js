import Swal from 'sweetalert2'

const getDonationData = () => {
    const donationData = localStorage.getItem('donated-data');
    if (donationData) {
        return JSON.parse(donationData);

    } else {
        return [];
    }
}

const setDonationData = (donation) => {
    console.log(donation);
    const donationData = getDonationData();
    const isDonated = donationData.find(item => item.id === donation.id)
    if (!isDonated) {
        donationData.push(donation);
        localStorage.setItem('donated-data', JSON.stringify(donationData))
        Swal.fire({
            icon: 'success',
            title: 'Ma sha allah',
            text: "You're awesome",
            timer: 1500
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Already Donated',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

export { getDonationData, setDonationData }