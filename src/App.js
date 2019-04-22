import React from 'react';
import './App.css';
import Form from "./Components/Containers/Form.js";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import Dossier from "./Components/Containers/Dossier.js";

const StyleItem = styled.p`
margin : 10px;
display: flex;
flex-direction: column;
`;

const StyleHead = styled.div`
display: flex;
align-content: flex-start;
justify-content: space-between;
background: lightgray;
`;

const StyleLeft =styled.div`
display: flex;
align-content: flex-start;
justify-content: space-between;
background: lightgray;
`;

const StyledTabs = styled(Tabs)`
background-color:gray;
`;


function App () {

  //creating object
  const onSubmit = (fields) => {
    console.log ("App com got : ", fields );
  };
  
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

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
    <AppBar position="static">
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="white"
        textColor="black" 
      >
        <Tab label="☰" />
        <Tab label="Dossier" />
        <Tab label="Statistiques" />
        <Tab label="+" />
      </StyledTabs>
      </AppBar>
    </Paper>
      {value === 0  }
      {value === 1 && <Dossier></Dossier>}
      {value === 2 }
      {value === 3 && <Form onSubmit = {fields => this.onSubmit (fields) } 
      />}
      
      </div>
    );
  
}

export default App;
