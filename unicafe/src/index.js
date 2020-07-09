import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return(
    <button onClick = {onClick} >{text}</button>
  )
 
}

const Average = (props) => {
  if(props.total === 0){
    return(
      <table>
      <tbody>
      <tr>{props.text}0</tr>
      </tbody>      
    </table>  
    )
  }
  return(
    <table>
      <tbody>
      <tr>{props.text}{(props.good+props.bad)/props.total}</tr>
      </tbody>      
    </table>
  )
}

const PostivePercent = (props) => {
  if(props.total === 0){
    return(
      <table>
      <tbody>
      <tr>{props.text}0</tr>
      </tbody>      
    </table>  
    )
  }
  return(
    <table>
      <tbody>
      <tr>{props.text}{(props.good/props.total)*100}%</tr>
      </tbody>   
    </table>
    
  )
}

const Statistics = (props) => {
  if(props.text ==='Average:'){
    return(   
        <Average good={props.good} bad={props.bad} total={props.total} text={props.text} />
    )
  }

  if(props.text ==='Positive:'){
    return(
          <PostivePercent total={props.total} good={props.good} text={props.text} />
    )
  }

    return(
      
        <table>
        <tbody>
        <tr>
        <td>{props.text} {props.value} </td>
        </tr>        
        </tbody>
        </table>
    
    )
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    setGood(good + 1);
  }

  const handleNeutralButton = () => {
    setNeutral(neutral + 1);
  }

  const handleBadButton = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodButton} text = 'good' />
      <Button onClick={handleNeutralButton} text = 'neutral' />
      <Button onClick={handleBadButton} text = 'bad' />
      <h3>Statistics</h3>
      <Statistics text='Good:' value={good} />
      <Statistics text='Neutral:' value={neutral} />
      <Statistics text='Bad:' value={bad} />
      <Statistics text='Total:' value={good+bad+neutral} />
      <Statistics text='Average:' good={good} bad={bad *-1} total={good+bad+neutral} />
      <Statistics text='Positive:' total={good+bad+neutral} good={good} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
