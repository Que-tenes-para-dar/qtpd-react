export const defaultLocation = Object.freeze({
  latitude: -34.9050033,
  longitude: -56.1373682
});

export const defaultFilters = Object.freeze({
  donationTypes: [],
  location: {
    latitude: defaultLocation.latitude,
    longitude: defaultLocation.longitude
  },
  maxDistance: 1000
});

export const centerTypes = Object.freeze({
  AnimalRefuge: 'AnimalRefuge',
  Home: 'Home',
  Organization: 'Organization',
  ReligiousCenter: 'ReligiousCenter',
  School: 'School',
});
