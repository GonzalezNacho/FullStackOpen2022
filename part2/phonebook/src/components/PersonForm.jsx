import { useState } from 'react';
import personService from '../services/persons'
import InputForm from "./InputForm";

const PersonForm = ({persons, setPersons}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addName = (e) => {
        e.preventDefault()
    
        if(persons.find(person => person.name == newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
            }

            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
        
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    return (
        <form>
            <InputForm text={'name:'} value={newName} setValue={setNewName}/>
            <InputForm text={'number:'} value={newNumber} setValue={setNewNumber}/>
            <div>
                <button type="submit" onClick={addName}>add</button>
            </div>
        </form>
    )
}

export default PersonForm;