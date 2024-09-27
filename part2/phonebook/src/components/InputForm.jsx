const InputForm = ({text, value, setValue}) => {
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            {text} <input value={value}
            onChange={handleChange}/>
        </div>
    )
}

export default InputForm