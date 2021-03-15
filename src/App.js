import "./App.css";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p className="App-title">Welcome to nudge.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add a contact
        </a>
      </header>
    </div>
  );
}

export default App;
