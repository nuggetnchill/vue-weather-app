const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_URL = `${proxy}https://api.darksky.net/forecast/a863d2bf51461f915d4cb114e08b40db/`;
const location = '37.697948,-97.314835';

const getData = async () => {
  const response = await fetch(`${API_URL}${location}`);
  const data = await response.json();
  return data;
};

export default { getData };
