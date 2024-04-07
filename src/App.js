import "./App.css";
import React, {useState} from 'react';
import VideoCallPage from "./VideoCallComponents/videoCallPage";
import Header from "./components/Header";
import {  Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero";
import Home from "./components/Home"
import Resource from "./components/Resource";
import { AuthDisplay } from "./components/AuthDisplay";
function App() {
  const [inCall, setInCall] = useState(false);
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
      <Route exact path="/video-call"> {/* Define route for video call page */}
          <VideoCallPage inCall={inCall} setInCall={setInCall} />
      </Route> 
      <Route path="/resource" component={Resource}/>
      <Route path="/AuthDisplay" component={AuthDisplay}/>
    </Switch>
  </Router>
  );
}

export default App;
