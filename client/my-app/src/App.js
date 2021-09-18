import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          YOU DRAW I GUESS
        </p>
        <a
          className="App-link"
          href="https://github.com/zhuoweiz/YouDrawIGuess"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>A HackRice project</code>
        </a>
      </header>
    </div>
  );
}

export default App;
