import React, { Component } from "react";
import ReactGA from "react-ga";
import './App.css';
import Main from "./Components/Main";

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }
render(){
  return (
    <Main />
    
  );
  }
}

export default App;
