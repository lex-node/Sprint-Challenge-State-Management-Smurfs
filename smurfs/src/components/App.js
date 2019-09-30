import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList'
import AddSmurf from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf/>
          <SmurfsList/>
      </div>
    );
  }
}

export default App;
