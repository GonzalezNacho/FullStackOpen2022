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
            <Total parts={parts} />
        </>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    
    return <b>total of {total} exercises</b>
}

const Header = ({name}) => <h2>{name}</h2>

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course