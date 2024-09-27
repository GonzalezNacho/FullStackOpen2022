import { useState } from 'react'
import Person from './components/Person'
import InputForm from './components/InputForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addName = (e) => {
    e.preventDefault()

    if(persons.find(person => person.name == newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length +1,
      }

      setPersons(persons.concat(personObject))

      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = search == ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search))

  return (
    <div>
      <h2>Phonebook</h2>
      <InputForm text={'filter shown with'} value={search} setValue={setSearch}/>
      <h2>add a new</h2>
      <form>
        <InputForm text={'name:'} value={newName} setValue={setNewName}/>
        <InputForm text={'number:'} value={newNumber} setValue={setNewNumber}/>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => 
          <Person key={person.id} name={person.name} number={person.number}/>
        )}
      </div>
    </div>
  )
}

export default App