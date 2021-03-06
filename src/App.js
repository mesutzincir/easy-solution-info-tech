// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
function App() {
  const title = "Welcome easy solution  info tech Limited";
  const linkReact = "https://reactjs.org";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
