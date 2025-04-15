import { useState } from 'react';
import personService from '../services/persons'
import InputForm from "./InputForm";

const PersonForm = ({persons, setPersons, notiTemp}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const updateContact = (verifyPerson, personObject) => {
        const replace = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

        replace && personService
            .updatePerson(verifyPerson.id, personObject)
            .then(returnedPerson => {
                setPersons(persons.map(a => a.id !== verifyPerson.id ? a : returnedPerson))
                notiTemp(`Updated ${returnedPerson.name}`, 'green')

                setNewName('')
                setNewNumber('')
            })
            .catch(err => {
                notiTemp(err.response.data.error, 'red') 
            })
    }

    const addContact = personObject => {
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                notiTemp(`Added ${returnedPerson.name}`, 'green')
    
                setNewName('')
                setNewNumber('')
            })
            .catch( error => {
                notiTemp(error.response.data.error, 'red')
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