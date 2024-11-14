import Person from "./Person"

const Persons = ({persons, setPersons, search}) => {

    const personsToShow = search == ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search))

    const updatePersons = id => setPersons(persons.filter(a => a.id !== id))

    return (
        <div>
            {personsToShow.map(person =>
                <Person key={person.id} name={person.name} number={person.number} id={person.id} updatePersons={() => updatePersons(person.id)}/>
            )}
        </div>
    )
}

export default Persons