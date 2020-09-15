import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value}) => {
  return <p>{text} {value} </p>
}

const Statistics = (props) => {
  if (props.totalFeedback === 0) {
    return <p>No feedback is given</p>
  }
  return (
    <div>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.totalFeedback} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.goodPercentage + ' ' + props.percentSign} ></Statistic>
        </div>  
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const totalFeedback = good + bad + neutral
  const average = totalFeedback / 3
  const goodPercentage = (good * 100) / totalFeedback
  const percentSign = '%'

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood} >good</button>
      <button onClick={handleNeutral} >neutral</button>
      <button onClick={handleBad} >bad</button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}
      totalFeedback={totalFeedback} average={average} goodPercentage={goodPercentage} 
      percentSign={percentSign} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
