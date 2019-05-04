import React, { Component } from 'react';
//import './Form.css';
import Input from "./Input"
import DatePicker from "./DatePicker"
import styled from 'styled-components'
import SelectGender from "./SelectGender";
import ProgressLine from "./ProgressLine";


//styling form
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

//Styling the timeline
const StyledDate = styled.div`
&&{
margin-top: 10px;
display: flex;
}
`;

//styling button
const StyleButton = styled.button`
display:flex;
background: lightgray;
width: 150px;
height:60px;
border-radius: 10px;
font-size:25px; 
justify-content: center;
`;

//button positioning
const ButtonPosition = styled.div`
display: flex;
justify-content: flex-end;
`;

function myFunction() {
  document.getElementById("gender").focus();
}


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

          <SelectGender 
            label= "sexe"
            handleChange={this.handleChange}
            ></SelectGender>

          <Input
            label="No de téléphone"
            name="tel"
            firstName="tel"
            text="tel"
            handleChange={this.handleChange}
            ></Input>
      
       </StyledForm>

       
       </StyledFormPage>
       <ButtonPosition>
      <StyleButton onClick ={ e => this.onSubmit(e)}> Ajouter </StyleButton>
      </ButtonPosition>
      <StyledDate>
        <ProgressLine></ProgressLine>
       </StyledDate>
       </StyledFormDate>
      );
    }
  }
  
  export default Form;