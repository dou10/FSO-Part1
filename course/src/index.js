import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const course = {

    name: 'Half Stack application development' ,
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
  
      {
        name: 'Using props to pass data',
        exercise: 7
      },
  
      {
        name: 'State of a component',
        exercise: 14
      }

    ]
}
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total total = {course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <p>{props.course}</p> 
  )
}

const Total = (props) => {
  return(
    <p>
      There are a total of {props.total[0].exercise + props.total[1].exercise + props.total[2].exercise} excercises.
    </p>
    
  )
}

const Content = (props) => {
  return (
    <>
      <Part names = {props.parts[0].name} excercises = {props.parts[0].exercise} />
      <Part names = {props.parts[1].name} excercises = {props.parts[1].exercise} />
      <Part names = {props.parts[2].name} excercises = {props.parts[2].exercise} />

    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>The name of the excercise is {props.names} and there {props.excercises} excercises. </p>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))


