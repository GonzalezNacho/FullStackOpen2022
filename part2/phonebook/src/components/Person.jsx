import personService from '../services/persons'

const Person = ({name, number, id, updatePersons}) => {

    const deleteContact = () => {
        const confirmDelete = window.confirm(`Delete ${name}?`)

        confirmDelete && personService
            .deletePerson(id)
            .then( res  => {
                updatePersons()
            })
    }

    return (
        <>
            <p>{name} {number}</p>
            <button onClick={deleteContact}>delete</button>
        </>
    )
}

export default Person