import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountires] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then( res => {
        const countriesRes = res.map(ele => ele.name)
        console.log(countriesRes)
        setCountires(countries.concat(countriesRes))
      })
  },[])


  const handleChange = e => {
    setSearch(e.target.value)
  }

  const results = countries.filter(countries => countries.common.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      find countries <input onChange={handleChange}/>
      {search != '' && <Countries countriesToShow={results} setSearch={setSearch}/>}
    </>
  )
}

export default App
