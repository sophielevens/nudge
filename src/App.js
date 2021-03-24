import "./App.css";
import Header from "./components/Header.js";
import AddCard from "./components/AddCard.js";
import LoginButton from "./components/LoginButton.js";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="Page-container">
          <p className="App-title">Welcome to nudge.</p>
          <AddCard />
        </div>
      </header>
    </div>
  );
}

export default App;
