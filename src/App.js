import "./App.css";
import Header from "./components/Header";
import {  Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero";
import Home from "./components/Home"
import Resource from "./components/Resource";
import { AuthDisplay } from "./components/AuthDisplay";
function App() {
  return ( 
  <Router>
    <Switch>
      <Route exact path="/">
        <Header />
        <Hero />
      </Route>
       <Route exact path="/channels">
        <Home />
      </Route>
      <Route exact path="/channels/:id">
        <Home />
      </Route> 
      <Route path="/resource" component={Resource}/>
      <Route path="/AuthDisplay" component={AuthDisplay}/>
    </Switch>
  </Router>
  );
}

export default App;
