import logo from "./logo.svg";
import "./App.css";
import jsxButton from "./component/jsButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <jsxButton />
      </header>
    </div>
  );
}

export default App;
