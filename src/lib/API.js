const API_URL = `https://api.darksky.net/forecast/${API_KEY}/`;
const API_KEY = 'a863d2bf51461f915d4cb114e08b40db';

const getData = async () => {
  const response = await fetch(`${API_URL}/123,1234`);
  const data = await response.json();
  console.log(data);
};

export default { getData };
