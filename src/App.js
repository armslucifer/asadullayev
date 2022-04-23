import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/projects" component={Projects} exact>
          <Projects />
        </Route>
        <Route path="/about" component={About} exact>
          <About />
        </Route>
        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
