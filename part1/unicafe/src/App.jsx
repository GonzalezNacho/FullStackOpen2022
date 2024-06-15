import { useState } from 'react'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
const Statistic = ({text, value, p =''}) => <>{text} {value} {p}<br/></>
const Statistics = ({statistics}) => {
  const total = statistics.bad + statistics.neutral + statistics.good;
  const noClicks = total == 0;
  const average =  (statistics.good -statistics.bad) / total;
  const positive =  statistics.good *100 / total;

  return (
    noClicks ? 
      <p>No feedback given</p>
      : 
      <p>
        <Statistic text='good' value={statistics.good} />
        <Statistic text='neutral' value={statistics.neutral} />
        <Statistic text='bad' value={statistics.bad} />
        <Statistic text='all' value={total} />
        <Statistic text='average' value={average}/>
        <Statistic text='postive' value={positive} p='%'/> 
      </p>
  )
}

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0
  })

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
      <Statistics statistics={statistics} />
    </>
  )
}
export default App;