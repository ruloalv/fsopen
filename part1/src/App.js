// import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

function App() {
  return (
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='yellow' message='de React' />
      <Description />
    </div>
  );
}

export default App;
