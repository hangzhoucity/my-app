import React, { Component } from 'react';

/* Import Components */
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

class patientInformation extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            MD: "",
            prenom: "",
            nom: "",
            naissance: "",
            RAMQ: "",
            dossier: "",
            sexe: "",
            telephone:""
          },
    
          genderOptions: ["Male", "Female", "Others"],
          
        };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
}
 /* This lifecycle hook gets executed when the component mounts */