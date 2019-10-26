import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "./action/getSmurfs";

const AddSmurf = () => {
  const [state, setState] = useState({ name: "", age: "", height: "" });
  
  const onSubmit = event => {
    event.preventDefault();
    setState({ name: "", age: "", height: "" });
    console.log(state)
};


  const valueChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onSubmit} >
      <input
        placeholder="Name"
        name="name"
        value={state.name}
        onChange={valueChange}
      />
      <input 
        placeholder="Age"
        name="age"
        value={state.age}
        onChange={valueChange}
      />
      <input
        placeholder="Height"
        name="height"
        value={state.height}
        onChange={valueChange}
      />
      <button onClick={onSubmit}>Add Smurf</button>
    </form>
  );
};
const mapStateToProps = state => {
  return {
    AddSmurf: state.AddSmurf,
    isFetching: state.isFetching,
    error: state.error
  };
};


export default connect(
  mapStateToProps,
  {addSmurf}
)(AddSmurf);