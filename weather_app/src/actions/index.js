import axios from 'axios';

const API_KEY = 'f3dae4f77f4ea09df4214014ecd3dfb2';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Middlewares are functions that take an action, depending on type/payload/etc. 
//the middleware lets actions pass/manipulates them/logs them/or stops them before they reach a reducer

//We only change app state through reducers and actions

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url =`${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return(
		type: FETCH_WEATHER
	);
}