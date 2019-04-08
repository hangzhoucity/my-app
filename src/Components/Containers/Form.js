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

 onSubmit = (e) => {
   e.preventDefault();
   this.props.onSubmit(this.state)
   this.setState ({
      MD: "",
      firstName: "",
      lastName: "",
      date: "",
      RAMQ: "",
      dossier: "",
      sexe: [],
      tel: ""
   });
 }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label id = "MD"> MD responsable :  
            <input type="text" 
              name="MD" 
              defaultValue={this.state.MD} 
              onChange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label id = "firstName"> Prénom : 
            <input type="text" 
              name="firstName" 
              defaultValue={this.state.firstName}
              onChange = {e =>this.handleChange(e)} required/> 
          </label> <br></br>

          <label id = "lastName"> Nom : 
            <input type="text" 
              name="lastName" 
              defaultValue={this.state.lastName} 
              onChange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label htmlFor="birthdate"> Date de naissance : </label>
             <input id="birthdate" 
              name="date" 
              type="date" 
              defaultValue={this.state.date}
              onChange= {e =>this.handleChange(e)} required/><br></br>

          <label id = "RAMQ"> RAMQ : 
            <input type="text" 
              name="RAMQ" 
              defaultValue={this.state.RAMQ} 
              onChange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label id = "dossier"> Dossier :  
            <input type="text" 
              name="dossier" 
              defaultValue={this.state.Dossier} 
              onChange= {e =>this.handleChange(e)} required/>
          </label> <br></br>

          <label id = "sexe"> Sexe : 
          <select defaultValue={this.state.male} onChange={this.handleChange}> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
          </select> </label><br></br>

          <label id = "tel"> Téléphone : 
            <input type="telephone" 
              name="tel" 
              defaultValue={this.state.tel} 
              onChange= {e =>this.handleChange(e)} required/></label>

          <button onClick ={ e => this.onSubmit(e)}> Submit </button>
       </form>
      );
    }
  }
  
  export default Form;