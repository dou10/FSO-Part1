import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{
  return(
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [point, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomValue = () =>{
    let random = Math.floor(Math.random()*anecdotes.length);
    setSelected(random);
  }

  const vote = () =>{
    const copy =[...point]
    copy[selected] += 1
    setPoints(copy);
  }

  const maxIndex = point.indexOf(Math.max(...point))
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>{point[selected]}</p>
      <Button onClick={randomValue} text='next anecdote'/>
      <Button onClick={vote} text='vote' />
      <h1>Anecdote with most votes!</h1>
      <p>{props.anecdotes[maxIndex]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)