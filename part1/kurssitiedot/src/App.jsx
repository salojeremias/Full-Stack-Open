const App = () => {
  const course = 'Full Stack Open'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>{part}: {exercises} exercises</p>
    </div>
  )
}

  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }

  const Content = () => {
    const parts = [
      part1,
      part2,
      part3,
    ]
    const exercises = [
      exercises1,
      exercises2,
      exercises3,
    ]

    return (
      <div>
        <Part part={parts[0]} exercises={exercises[0]} />
        <Part part={parts[1]} exercises={exercises[1]} />
        <Part part={parts[2]} exercises={exercises[2]} />
      </div>
    )
  }
  
  const Total = () => {
    return (
      <div>
        <p>Total number of exercises: {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App;
