import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Containers/Form.js";


class App extends Component {

  onSubmit = (fields) => {
    console.log ("App com got : ", fields );
  };

  render() {
    return (

      <div className = "App">
      
       <Form onSubmit = {fields => this.onSubmit (fields) } />

      </div>
    );
  }
}

export default App;
