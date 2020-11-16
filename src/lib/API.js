const proxy = 'https://cors-anywhere.herokuapp.com/';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/a863d2bf51461f915d4cb114e08b40db/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

const getCoordinates = async (location) => {
  const response = await fetch(`${GEO_API_URL}${location}`);
  const data = await response.json();
  return data;
};

const getData = async (lat, lng) => {
  const response = await fetch(`${WEATHER_API_URL}${lat},${lng}`);
  const data = await response.json();
  return data;
};

const getAddress = async (lat, lng) => {
  const response = await fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`);
  const data = await response.json();
  return data;
};

export default { getData, getCoordinates, getAddress };
