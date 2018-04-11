import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import Students from "./Students";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  render() {
    <Students />;
    return (
      <div className="App">
        <header className="after login">
          <h2>Teacher Portal</h2>
        </header>
        <button
          className="to-login"
          onClick={() => (window.location.href = "http://localhost:3001/login")}
        >
          Login
        </button>
      </div>
    );
  }
}

export default App;
