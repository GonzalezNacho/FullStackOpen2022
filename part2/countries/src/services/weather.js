import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = import.meta.env.VITE_API_KEY

const getWeather = (capital) => {
    const request = axios.get(`${baseUrl}q=${capital}&units=metric&appid=${API_KEY}`)
    return request.then(response => response.data)
}

export default { getWeather }