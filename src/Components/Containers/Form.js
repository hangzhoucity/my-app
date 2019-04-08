import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
      MD: "",
      firstName: "",
      lastName: "",
      date: "",
      RAMQ: "",
      dossier: "",
      sexe: [],
      tel: ""
    };
    
 handleChange = e => {
   this.setState({
     [e.target.name]: e.target.value
   });
 };

 onSubmit = () => {
   console.log (this.state);
 }
 //   constructor(props) {
 //   super(props);
//this.state = { MD: '' }
  //  this.handleSubmit = this.handleSubmit.bind(this);
  //  this.handleChange = this.handleChange.bind(this)
  //}

  //handleChange = (event) => {
  //  this.setState({ value: event.target.value })
  //}
  

  //handleSubmit(event) {
  //  event.preventDefault();
  //  const data = new FormData(event.target);
    
  //  fetch('/api/form-submit-url', {
  //    method: 'POST',
  //    body: data,
  //  });
  //}

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label id = "MD"> MD responsable :  
            <input type="text" 
              name="MD" 
              defaultvalue={this.state.MD} 
              onchange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label id = "firstName"> Prénom : 
            <input type="text" 
              name="firstName" 
              defaultvalue={this.state.firstName}
              onchange = {e =>this.handleChange(e)} required/> 
          </label> <br></br>

          <label id = "lastName"> Nom : 
            <input type="text" 
              name="lastName" 
              defaultvalue={this.state.lastName} 
              onchange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label htmlFor="birthdate"> Date de naissance : </label>
             <input id="birthdate" 
              name="date" 
              type="date" 
              defaultvalue={this.state.date}
              onchange= {e =>this.handleChange(e)} required/><br></br>

          <label id = "RAMQ"> RAMQ : 
            <input type="text" 
              name="RAMQ" 
              defaultvalue={this.state.RAMQ} 
              onchange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label id = "dossier"> Dossier :  
            <input type="text" 
              name="dossier" 
              defaultvalue={this.state.Dossier} 
              onchange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label id = "sexe"> Sexe : 
          <select defaultvalue={this.state.sexe} onChange={this.handleChange}> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
          </select> </label><br></br>

          <label id = "tel"> Téléphone : 
            <input type="telephone" 
              name="tel" 
              defaultvalue={this.state.tel} 
              onchange= {e =>this.handleChange(e)} required/></label>

          <button onclick ={ ()=> this.onSubmit()}> Submit </button>
       </form>
      );
    }
  }
  
  export default Form;