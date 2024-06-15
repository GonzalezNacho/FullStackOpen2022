import { useState } from 'react'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
const Statistics = ({text, value, p}) => <>{text} {value} {p}<br/></>


const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0
  })
  const total = statistics.bad + statistics.neutral + statistics.good;

  const statisticsArray = {
    'good': {good: statistics.good +1},
    'neutral': {neutral: statistics.neutral +1},
    'bad': {bad: statistics.bad +1}
  }
  
  const setToValue = (feedback) =>  () => {
    setStatistics({...statistics, ...statisticsArray[feedback]})
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={setToValue('good')} text='good'/>
      <Button onClick={setToValue('neutral')} text='neutral'/>
      <Button onClick={setToValue('bad')} text='bad'/>
      <h1>statistics</h1>
      <p>
        <Statistics text='good' value={statistics.good} />
        <Statistics text='neutral' value={statistics.neutral} />
        <Statistics text='bad' value={statistics.bad} />
        <Statistics text='all' value={total} />
        <Statistics text='average' value={total == 0 ? 0 : (statistics.good -statistics.bad) / total}/>
        <Statistics text='postive' value={total == 0 ? 0 : statistics.good *100 / total} p='%'/> 
      </p>
    </>
  )
}
export default App;