import Country from "./Country";

function Countries({countriesToShow}) {
    let content = <p>Too many matches, specify another filter</p>;
    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        content =  countriesToShow.map(country => 
            <p key={country.common}>{country.common}</p>
        );
    }

    if (countriesToShow.length == 1)
        content = <Country country={countriesToShow[0].common} />

    return( 
        <>
            {content}
        </>
    )
}

export default Countries;