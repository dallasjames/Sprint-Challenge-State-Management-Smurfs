import React from "react";
import "./App.css";
import SmurfList from "./smurfList";
import AddSmurf from './addSmurf';

function App(){
  return (
    <div className="App">
      <AddSmurf/>
      <SmurfList />
    </div>
  );
}

export default App