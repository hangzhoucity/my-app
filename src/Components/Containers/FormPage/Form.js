import React, { Component } from 'react';
//import './Form.css';
import Input from "./Input"
import DatePicker from "./DatePicker"
import styled from 'styled-components'
import SelectGender from "./SelectGender";
import ProgressLine from "./ProgressLine";






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

 //AJAX CALL HERE
 addPatient(event) {
  event.preventDefault();
    let data = {
    ramq: this.refs.ramq.value,
    name: this.refs.name.value,
    surname: this.refs.surname.value,
    dob: this.refs.dob.value,
    sexe: this.refs.sexe.value,
    phoneNo: this.refs.phoneNo.value,
    MD: this.refs.MD.value,
    file: this.refs.file.value
    };
    var request = new Request('http://localhost: 3000/api/Hospital', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringyfy(data)
  });

  //xmlhttprequest()
    fetch(request)
      .then(function(response) {
        response.json()
        .then(function(data){
          console.log(data)
        })
      })
 }

    render() {
      return (
        <StyledFormDate>
        <StyledFormPage>
        <StyledForm onSubmit={this.handleSubmit}>
          <Input
            ref="MD"
            label="MD responsable"
            name="MD"
            firstName="MD"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <Input
            ref="surname"
            label="Prénom"
            name="Prenom"
            firstName="firstName"
            text="text"
            handleChange={this.handleChange}
            ></Input>


          <Input
            ref="name"
            label="Nom"
            name="Nom"
            firstName="Nom"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <DatePicker
            ref="dob"
            label="Date de naissance"
            date="date"
            firstName="date"
            text="birthday"
            handleChange={this.handleChange}
            ></DatePicker>

          <Input
            ref="ramq"
            label="RAMQ"
            name="RAMQ"
            firstName="RAMQ"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <Input
            ref="file"
            label="No de dossier"
            name="dossier"
            firstName="Dossier"
            text="text"
            handleChange={this.handleChange}
            ></Input>

          <SelectGender 
            ref="sexe"
            label= "sexe"
            handleChange={this.handleChange}
            ></SelectGender>

          <Input
            ref= "PhoneNo"
            label="No de téléphone"
            name="tel"
            firstName="tel"
            text="tel"
            handleChange={this.handleChange}
            ></Input>
      
       </StyledForm>

       
       </StyledFormPage>
       <ButtonPosition>
      <StyleButton onClick = {this.addPatient.bind(this)}> Ajouter </StyleButton>
      </ButtonPosition>
      <StyledDate>
        <ProgressLine></ProgressLine>
       </StyledDate>
       </StyledFormDate>
      );
    }
  }
  
  export default Form;

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