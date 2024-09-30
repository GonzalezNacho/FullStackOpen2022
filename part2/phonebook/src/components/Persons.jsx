import Person from "./Person"

const Persons = ({persons, search}) => {

    const personsToShow = search == ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search))

    return (
        <div>
            {personsToShow.map(person => 
                <Person key={person.id} name={person.name} number={person.number}/>
            )}
        </div>
    )
}

export default Persons