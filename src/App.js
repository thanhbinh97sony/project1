import { useState, useTransition } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  const [isPending, startTransition] = useTransition()
  const [state1, setstate1] = useState(0);
  const [state2, setstate2] = useState(0);



  const handleClick = () => {

    setstate1(2)
    setstate2(2)
    console.log(state1, state2);

  }

  const handleChang = () => {

  }
  return (
    <div className="App">
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
        <button onClick={handleClick}>BTN TTTTT</button>
        <input type="text" onChange={handleChang} />
      </header>
    </div>
  );
}

export default App;
