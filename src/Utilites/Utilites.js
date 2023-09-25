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
    } else {
        alert('already')
    }
}

export { getDonationData, setDonationData }