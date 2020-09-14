import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  if (props.totalFeedback === 0) {
    return <p>No feedback is given</p>
  }
  return (
    <>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.totalFeedback}</p>
        <p>average { props.totalFeedback / 3}</p>
        <p>positive {props.goodPercentage} % </p> 
        </>  
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
  const goodPercentage = (good * 100) / totalFeedback

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood} >good</button>
      <button onClick={handleNeutral} >neutral</button>
      <button onClick={handleBad} >bad</button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}
      totalFeedback={totalFeedback} goodPercentage={goodPercentage} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
