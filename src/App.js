import React, { useEffect, useState } from 'react';
import Form from "./Components/Containers/FormPage/Form.js";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import Dossier from "./Components/Containers/FolderPage/Dossier.js";
import DoctorList from './Components/Containers/DoctorList/DoctorList.js'


const App  =(props) => {

const [apiResponse, setApiResponse] =useState('');

const callAPI = () =>{
    fetch("http://localhost:9000/api/Hospital")
    .then(res => {console.log("hello",res)})
    .catch (err => err);
}
useEffect(() =>{
  callAPI();
})

const componentDidMount= () => {
  console.log('COMPONENT DID MOUNT');
};

  //creating object
  // const onSubmit = (fields) => {
  //   console.log ("App com got : ", fields );
  // };
  
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

console.log("value" , value)
    return (
      <div className = "App">
      <StyleHead className ="Head">
      <StyleItem> TREMBLAY, Jean </StyleItem> 
      <StyleItem> Dossier 138493</StyleItem>
      </StyleHead>
      <StyleLeft className = "LeftHead">
      <StyleItem> DDN 1-janv-1979</StyleItem>
      <StyleItem>RAMQ TREJ79010116</StyleItem>
      </StyleLeft>
      
      <Paper >
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="white"
        textColor="black" 
      >
      
        <FirstTab label="☰" />
        <SecondTab label="Dossier" />
        <ThirdTab label="Statistiques" />
        <LastTab label="+" />
      </StyledTabs>
     </Paper>
      {value === 0 && <DoctorList/>}
      {value === 1 && <Dossier/>}
      {value === 2 }
      {value === 3 && 
      <Form 
      //    onSubmit = {fields => addPatient (fields) } 
      // 
      />}
      <p className="App-intro">{props => apiResponse(props)}</p>
      </div>
    );
}

export default App;

const StyleItem = styled.p`
margin : 10px;
display: flex;
flex-direction: column;
`;

const StyleHead = styled.div`
margin-top : 10px;
padding-top: 10px;
padding-left: 10px;
padding-right: 10px;
display: flex;
align-content: flex-start;
justify-content: space-between;
background: #FBFBFE;
`;

const StyleLeft =styled.div`
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
display: flex;
align-content: flex-start;
justify-content: space-between;
background: #FBFBFE;
`;

const StyledTabs = styled(Tabs)`
background-color:white;
margin-bottom:10px;
width:426px;
display:flex;
justify-content:space-between;
`;

const FirstTab = styled(Tab)`
&&{
width:50px;
min-width:50px;
background-color:#DFDEE6;
margin-right: 0 4px 0 0 ;
}
`;

const LastTab = styled(Tab)`
&&{
width:50px;
min-width:50px;
background-color:#DFDEE6;
margin-right: 0 0 0 4px;

}
`;

const ThirdTab = styled(Tab)`
&&{
margin-right:2px;
background-color:#DFDEE6;
}
`;

const SecondTab = styled(Tab)`
&&{
margin: 0 2px;
background-color:#DFDEE6;
}
`;
