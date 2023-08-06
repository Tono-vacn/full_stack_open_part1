import { useState } from 'react'
const Header = (props) => {
    return (
      <div>
        <h1>
        {props.headline}
        </h1>
      </div>
    )
  }
const StatisticLine = (props) => {
    if (props.text === 'positive'){
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value}%</td> 
            </tr>
        )
    }
    else{
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td> 
            </tr>
        )
    }

}

const Button = (props) =>{
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistics = (props) => {
    if (props.all === 0) {
        return (
        <div>
            No feedback given
        </div>
        )
    }
    else {
        return (
        <div>
        <table>
        <tbody>
            <StatisticLine text = "good" value = {props.good} />
            <StatisticLine text = "neutral" value = {props.neutral} />
            <StatisticLine text = "bad" value = {props.bad} />
            <StatisticLine text = "all" value = {props.all} />
            <StatisticLine text = "average" value = {(props.good-props.bad)/(props.bad+props.good+props.neutral)} />
            <StatisticLine text = "positive" value = {props.good/(props.bad+props.good+props.neutral)*100} />
        </tbody>
        </table>
        </div>
        )
    }
    
  }
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <Header headline='give feedback'/>
        <Button handleClick={() => setGood(good + 1)} text='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
        <Button handleClick={() => setBad(bad + 1)} text='bad'/>
        <Header headline='statistics'/>
        <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad}/>
    </div>
  )
}

export default App