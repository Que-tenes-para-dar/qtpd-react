import {
    defaultFilters
} from '../../utils/constants.utils';

const setAllDonationTypesAsSelected = (donationTypes) => {
    donationTypes.forEach((donationType) => {
        defaultFilters.donationTypes.push(donationType);
    });
};

const filterUtils = {
    setAllDonationTypesAsSelected: setAllDonationTypesAsSelected
};

export default filterUtils;