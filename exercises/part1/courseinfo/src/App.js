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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header name={course} />
      <Content text={part1} exercises={exercises1} />
      <Content text={part2} exercises={exercises2} />
      <Content text={part3} exercises={exercises3} />
      <Total text='Number of exercises' total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
