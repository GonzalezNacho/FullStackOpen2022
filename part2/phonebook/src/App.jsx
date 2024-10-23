import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import InputForm from './components/InputForm'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <InputForm text={'filter shown with'} value={search} setValue={setSearch}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App