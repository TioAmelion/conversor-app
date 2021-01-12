import logo from './logo.svg';
import './App.css';
import Conversor from './componentes/conversor'
import ConversorDinamico from './componentes/conversorDinamico'

function App() {
    return (
      <div className="App">
        {/* <Conversor moedaA="ANG" moedaB="USD"></Conversor> */}
        <ConversorDinamico teste="all"></ConversorDinamico>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );

}

export default App;
