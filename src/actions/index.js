import axios from "axios";

const API_KEY = "d7cbecfe6c9d6547658f67c284281ff0";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ru`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
