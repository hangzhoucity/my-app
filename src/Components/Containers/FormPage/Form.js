import React, { useState } from 'react';
//import './Form.css';
import Input from "./Input"
import DatePicker from "./DatePicker"
import styled from 'styled-components'
import SelectGender from "./SelectGender";
import ProgressLine from "./ProgressLine";

const Form = () => {
  let [doctor_matricule, setMD] = useState("");
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [dob,setDob] =  useState("");
  let [ramq,setRamq] =  useState("");
  let [fileId, setFile] = useState("");
  let [sexe,setSexe] = useState("");
  let [tel, setTel] = useState("");

  const [data,setData]= useState(null);

  async function handleSubmit (event){
    event.preventDefault();
    alert(`submit ${doctor_matricule} ${name} ${surname} ${dob} ${ramq} ${fileId} ${sexe} ${tel}`)

    const data = {
      doctor_matricule,
      name,
      surname,
      dob,
      ramq,
      fileId,
      sexe,
      tel
    }

    console.log ("hey", data);

    let response = await fetch ('http://localhost:3001/createUsers',{
      method: 'POST',
      headers:{'Content-Type' : 'application/json'},
    
    body: JSON.stringify(data)}
    )
  
    response = await response.json();
    const newData = response;
    console.log(newData); 
  }


  const inputMdHandler = (e) => {
    setMD (e.target.value)
  }
  const inputNameHandler = (e) => {
    setName (e.target.value)
  }
  const inputSurnameHandler = (e) => {
    setSurname (e.target.value)
  }
  const inputDobHandler = (e) => {
    setDob (e.target.value)
  }
  const inputRamqHandler = (e) => {
    setRamq (e.target.value)
  }
  const inputFileHandler = (e) => {
    setFile (e.target.value)
  }
  const inputSexeHandler = (e) => {
    setSexe (e.target.value)
  }
  const inputTelHandler = (e) => {
    setTel (e.target.value)
  }
  
      return (
        <div >
        <StyledForm onSubmit={handleSubmit} method="post" action="createUsers">
        <label>
           MD:
           <input
             type="text"
             value={doctor_matricule}
             onChange={e => {inputMdHandler(e)}}
             required
           />
         </label>
         <label> 
           First Name:
           <input
             type="text"
             value={name}
             onChange={e => {inputNameHandler(e) }}
             required
             
           />
         </label>
         <label>
           Last Name:
           <input
             type="text"
             value={surname}
             onChange={e => {inputSurnameHandler(e)}}
             required
           />
         </label>
         <label>
           Date de naissance:
           <input
             type="text"
             value={dob}
             onChange={e => {inputDobHandler(e) }}
             required
           />
         </label>
         <label>
           RAMQ:
           <input
             type="text"
             value={ramq}
             onChange={e => {inputRamqHandler(e)}}
             required
           />
         </label>
         <label>
           Dossier:
           <input
             type="text"
             value={fileId}
             onChange={e => {inputFileHandler(e) }}
             required
             
           />
         </label>
         <label>
           Sexe:
           <input
             type="text"
             value={sexe}
             onChange={e => {inputSexeHandler(e)}}
             required
           />
         </label>
         <label>
           Telephone:
           <input
             type="text"
             value={tel}
             onChange={e => {inputTelHandler(e) }}
             required
           />
         </label>
         
         <button type = "submit"  >submit</button>
       </StyledForm>
      
       {/* <p>f</p>
       <pre>{data}</pre> */}
       </div>
     
      )
      
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