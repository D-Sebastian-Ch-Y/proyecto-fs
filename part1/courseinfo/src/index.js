import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log('Componente Header, props: '+props)
  return (
    <h1>
      {props.course}
    </h1>      
  )
}

const Part = (props) => {
  console.log('Componenete Part, props: '+props)
  return (
    <p>
      {props.nombre} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log('Componente Content, props: '+props)
  return (
    <div>
      <Part nombre={props.part[0].name} exercises={props.part[0].exercises} />
      <Part nombre={props.part[1].name} exercises={props.part[1].exercises} />
      <Part nombre={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log('Componente Total, props: '+props)
  return (
    <p>
      Number of excercises {props.exercises[0].exercises+props.exercises[1].exercises+props.exercises[2].exercises}
    </p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total exercises={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
