  
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'FULL STACK DEVELOPMENT'
  const part1 = {
    name: 'Express.js',
    exercises: 14
  }
  const part2 = {
    name: 'MongoDB',
    exercises: 7
  }
  const part3 = {
    name: 'Angular CLI',
    exercises: 14
  }
  const part4 = {
    name: 'React.js',
    exercises: 5
  }
  const part5 = {
    name: 'Node.js',
    exercises: 7
  }

  return (
    <div>
      <h1>{course}</h1>
	  <p>{part1.name}: {part1.exercises}</p>
	  <p>{part2.name}: {part2.exercises}</p>
	  <p>{part3.name}: {part3.exercises}</p>
    <p>{part4.name}: {part4.exercises}</p>
    <p>{part5.name}: {part5.exercises}</p>
	  <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises + part4.exercises + part5.exercises}</p>
    </div>
  )
}

export default App;