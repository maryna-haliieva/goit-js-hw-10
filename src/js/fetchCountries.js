const BASE_URL = `https://restcountries.com/v2`;
const FILTER_RESPONSE = `name,capital,flags,languages,population`;
export default function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?field=${FILTER_RESPONSE}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
