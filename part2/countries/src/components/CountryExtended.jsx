import { useEffect, useState } from "react";
import countryService from '../services/countries'
import CountryWeather from "./CountryWeather";

function CountryExtended({country}) {

    const [countryDetail, setCountryDetail] = useState(null)

    useEffect(() => {
        countryService
            .getOne(country)
            .then(res => {
                const resCountry = {
                    capital: res.capital,
                    area : res.area,
                    laguages: Object.values(res.languages),
                    flag : res.flags.png
                }
                console.log(resCountry)
                setCountryDetail(resCountry)
            })
    },[])

    return (
        <>
            <h1>{country}</h1>
            {
                countryDetail && 
                <>
                    <p>
                        capital {countryDetail.capital}
                        <br />
                        area {countryDetail.area}
                    </p>
                    <h3>languages:</h3>
                    <ul>
                        {
                            countryDetail.laguages.map( lang => <li key={lang}>{lang}</li>)
                        }
                    </ul>
                    <img src={countryDetail.flag} alt={`bandera de ${country}`} />
                    <CountryWeather capital={countryDetail.capital}/>
                </>
            }
            
            
        </>
    )
}

export default CountryExtended;