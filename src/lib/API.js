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

const getEmbedUrl = (lat, lng) => {
  return `https://maps.darksky.net/@temperature,${lat},${lng},6?domain="+encodeURIComponent(window.location.href)+"&auth=1525213550_b5fc128e7789bb56048952cc704c8473&embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=emoji`;
};

export default { getData, getCoordinates, getAddress, getEmbedUrl };
