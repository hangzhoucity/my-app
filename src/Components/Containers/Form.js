import React, { Component } from 'react';
//import './Form.css';
import Input from "./Input"
import DatePicker from "./DatePicker"
import styled from 'styled-components'

const StyledForm = styled.form`
display: flex ;
flex-direction: column;
align-items: flex-start;
`;

const StyledFormPage = styled.div`
display: flex;

`;

const StyledFormDate = styled.div`

`;

const StyledDate = styled.div`

`;

const StyleButton = styled.div`
justify-content: flex-end;
flex-direction: row-reverse;
align-item: flex-end;
`;

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
 };

    render() {
      return (
        <StyledFormDate>
        <StyledFormPage>
        <StyledForm onSubmit={this.handleSubmit}>
          <Input
            label="MD responsable"
            name="MD"
            firstName="MD"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <Input
            label="Prénom"
            name="Prenom"
            firstName="firstName"
            text="text"
            handleChange={this.handleChange}
            ></Input>


          <Input
            label="Nom"
            name="Nom"
            firstName="Nom"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <DatePicker
            label="Date de naissance"
            date="date"
            firstName="date"
            text="birthday"
            handleChange={this.handleChange}
            ></DatePicker>

          <Input
            label="RAMQ"
            name="RAMQ"
            firstName="RAMQ"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <Input
            label="No de dossier"
            name="dossier"
            firstName="Dossier"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <label id = "sexe"> Sexe 
          <select defaultValue={this.state.male} onChange={this.handleChange}> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
          </select> </label>

          <Input
            label="No de téléphone"
            name="tel"
            firstName="tel"
            text="tel"
            handleChange={this.handleChange}
            ></Input>
      <StyleButton>
          <button onClick ={ e => this.onSubmit(e)}> Ajouter </button>
      </StyleButton>
       </StyledForm>

       <StyledDate>
       </StyledDate>
       </StyledFormPage>
       </StyledFormDate>
      );
    }
  }
  
  export default Form;