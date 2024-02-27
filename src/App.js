//import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import Frase from './components/Frase';
// import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  //const name = 'Robinson'

  // function sum(a,b){
  //   return a+b
  // }

  //const url = "https://jira.ezute.org.br/images/atlassian-jira-logo-large.png"

  return (
    //<div className="App">
    //<div>
    <div className="App">
      <h1>Testando eventos</h1>
      
      <Evento numero='1'/>
      <Evento numero='2'/>

      <Form/>

      {/* <h2>Altarando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {sum(5,2)}</p>
      <img src={url} alt="imagem jira" />
      <HelloWorld/>

      <SayMyName name="Robenilson"></SayMyName>
      <SayMyName name={name}></SayMyName>

      <Pessoa nome="Robinson" 
      idade="31" 
      profissao="Programador" 
      foto="https://avatars.githubusercontent.com/u/49078615?v=4"/>
      
      <Frase />
      <Frase />

      <List/> */}
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
