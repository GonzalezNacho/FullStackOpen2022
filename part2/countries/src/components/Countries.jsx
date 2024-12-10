import CountryExtended from "./CountryExtended";
import Country from "./Country";

function Countries({countriesToShow, setSearch}) {
    
    let content = <p>Too many matches, specify another filter</p>;
    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        content =  countriesToShow.map(country => 
            <Country key={country.common} setSearch={setSearch} country={country.common}/>
        );
    }

    if (countriesToShow.length == 1)
        content = <CountryExtended country={countriesToShow[0].common} />

    return( 
        <>
            {content}
        </>
    )
}

export default Countries;