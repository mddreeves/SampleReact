import logo from './logo.svg';
import logo2 from './AWS.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Document Respository Search powered by AWS Kendra
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/kendra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about AWS Kendra
        </a>
      </header>
    </div>
  );
}

export default App;
