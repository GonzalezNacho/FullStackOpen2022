import { useState } from 'react';
import personService from '../services/persons'
import InputForm from "./InputForm";

const PersonForm = ({persons, setPersons, setNotification}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const updateContact = (verifyPerson, personObject) => {
        const replace = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

        replace && personService
            .updatePerson(verifyPerson.id, personObject)
            .then(returnedPerson => {
                setPersons(persons.map(a => a.id !== verifyPerson.id ? a : returnedPerson))
                setNotification(`Updated ${returnedPerson.name}`)
                setTimeout(() => {
                    setNotification(null)
                }, 2000);

                setNewName('')
                setNewNumber('')
            })
    }

    const addContact = personObject => {
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNotification(`Added ${returnedPerson.name}`)
                setTimeout(() => {
                    setNotification(null)
                }, 2000);
    
                setNewName('')
                setNewNumber('')
            })
    }

    const addName = (e) => {
        e.preventDefault()

        const verifyPerson = persons.find(person => person.name == newName)
        
        const personObject = {
            name: newName,
            number: newNumber,
        }

        verifyPerson 
            ? updateContact(verifyPerson, personObject)
            : addContact(personObject);
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