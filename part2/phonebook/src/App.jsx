import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import InputForm from './components/InputForm'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <InputForm text={'filter shown with'} value={search} setValue={setSearch}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} setPersons={setPersons} />
    </div>
  )
}

export default App