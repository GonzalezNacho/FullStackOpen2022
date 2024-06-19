const Part = ({part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part => 
                    <Part key={part.id} part={part}/>
            )}
        </>
    )
}

const Header = ({name}) => <h1>{name}</h1>

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course