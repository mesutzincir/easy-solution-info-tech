// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  const title = "Welcome easy solution  info tech Limited";
  const linkReact = "https://reactjs.org";
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload...
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
      <Navbar />
      <div className="content">
        {/* <h1> {title}</h1>
        <p>{[1, 2, 3, 4, "mesut"]}</p>
        <p>{Math.random() * 10}</p>
        <a href={linkReact}> Reactjs</a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
