import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Robinson'

  function sum(a,b){
    return a+b
  }

  const url = "https://jira.ezute.org.br/images/atlassian-jira-logo-large.png"

  return (
    //<div className="App">
    //<div>
    <div className="App">
      <h2>Altarando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {sum(5,2)}</p>
      <img src={url} alt="imagem jira" />
    </div>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
