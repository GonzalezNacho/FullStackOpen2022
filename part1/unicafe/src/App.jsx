import { useState } from 'react'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
const Stadistics = ({text, value}) => <>{text} {value} <br/></>
const App = () => {
  const [stadistics, setStadistics] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0
  })

  const stadisticsArray = {
    'good': {good: stadistics.good +1},
    'neutral': {neutral: stadistics.neutral +1},
    'bad': {bad: stadistics.bad +1}
  }
  const setToValue = (feedback) =>  () => {
    setStadistics({...stadistics, ...stadisticsArray[feedback]})
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={setToValue('good')} text='good'/>
      <Button onClick={setToValue('neutral')} text='neutral'/>
      <Button onClick={setToValue('bad')} text='bad'/>
      <h1>stadistics</h1>
      <p>
        <Stadistics text='good' value={stadistics.good} />
        <Stadistics text='neutral' value={stadistics.neutral} />
        <Stadistics text='bad' value={stadistics.bad} />
      </p>
    </>
  )
}
export default App;