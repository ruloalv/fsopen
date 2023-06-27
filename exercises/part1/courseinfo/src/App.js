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

const Content = (props) =>{
  return <>
    <Part1 text={props.text} ex={props.exercises} />
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

  const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      {/* <Header name={course} />
      <Content text={part1.name} exercises={part1.exercises} />
      <Content text={part2.name} exercises={part2.exercises} />
      <Content text={part3.name} exercises={part3.exercises} />
      <Total text='Number of exercises' total={part1.exercises + part2.exercises + part3.exercises} /> */}
      <Header name={course} />
      <Content text={parts[0].name} exercises={parts[0].exercises} />
      <Content text={parts[1].name} exercises={parts[1].exercises} />
      <Content text={parts[2].name} exercises={parts[2].exercises} />
      <Total text='Number of exercises' total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  );
}

export default App;
