// se extrae la propiedad name de props directamente en la creación de la funcion
const Header = ({name}) =>{
  //alternativa, se extrae la propiedad name de props
  //y se utiliza en la función como constante
  //const {name} = props
  return <h1>{name}</h1>
}
// forma corta>>   const Header = ({name}) => <h1>{name}</h1>

const Part1 = (props) =>{
  return <p>
    {props.text} {props.ex}
  </p>
}

const Content = ({parts}) =>{
  return <>
    <Part1 text={parts[0].name} ex={parts[0].exercises} />
    <Part1 text={parts[1].name} ex={parts[1].exercises} />
    <Part1 text={parts[2].name} ex={parts[2].exercises} />
  </>
}

const Total = (props) =>{
  return <p>{props.text} {props.total}
  </p>
}

function App() {
  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

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
      {/* <Header name={course} />
      <Content text={part1.name} exercises={part1.exercises} />
      <Content text={part2.name} exercises={part2.exercises} />
      <Content text={part3.name} exercises={part3.exercises} />
      <Total text='Number of exercises' total={part1.exercises + part2.exercises + part3.exercises} /> */}
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total text='Number of exercises' total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  );
}

export default App;
