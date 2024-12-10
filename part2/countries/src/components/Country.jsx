function Country({country, setSearch}) {
    console.log(country)
    return (
        <>
            <br />
            <a>{country}</a>
            <button onClick={() => setSearch(country)}>show</button>
        </>
    )
}

export default Country;