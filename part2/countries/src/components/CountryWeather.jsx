import  weatherService  from '../services/weather'
import { useState, useEffect } from 'react';

function CountryWeather({capital}) {
    const [weather, setweather] = useState({temp:null, wind:null})

    useEffect(() => {
            weatherService
                .getWeather(capital)
                .then(res => {
                    const resWeater = {
                        temp: res.main.temp,
                        wind : res.wind.speed,
                        icon : `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
                    }
                    console.log(resWeater)
                    setweather(resWeater)
                })
        },[])

    return (
        <>
            <h3>Weather in {capital}</h3>
            <p>temperature {weather.temp} Celcius</p>
            <img src={weather.icon} alt="" />
            <p>wind {weather.wind} m/s</p>
        </>
    )
}

export default CountryWeather;