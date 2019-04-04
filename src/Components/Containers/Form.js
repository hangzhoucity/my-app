import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
      MD: "",
      firstName: "",
      lastName: "",
      Date: "",
      RAMQ: "",
      Dossier: "",
      sexe: [],
      tel: ""
    }
  
    render() {
      return (
        <form>
          <label id = "MD"> MD responsable :  <input type="text" name="MD" value={this.state.MD} /></label> <br></br>
          <label id = "firstName"> Prénom : <input type="text" name="firstName" value={this.state.firstName} /> </label> <br></br>
          <label id = "lastName"> Nom : <input type="text" name="lastName" value={this.state.lastName} /></label> <br></br>
          <label htmlFor="birthdate">Date de naissance : </label>
          <input id="birthdate" name="birthdate" type="date" value={this.state.Date}/><br></br>
          <label id = "RAMQ"> RAMQ : <input type="text" name="RAMQ" value={this.state.RAMQ} /></label> <br></br>
          <label id = "Dossier"> Dossier :  <input type="text" name="Dossier" value={this.state.Dossier} /></label> <br></br>
          <label id = "sexe"> Sexe : <select value={this.state.sexe} onChange={this.handleSubmit}> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
          </select> </label><br></br>
          <label id = "tel"> Téléphone : <input type="tel" name="RAMQ" value={this.state.tel} /></label>

       </form>
      )
    }
  }
  
  export default Form;