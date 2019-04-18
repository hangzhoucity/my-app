import React from 'react';
import './App.css';
import Form from "./Components/Containers/Form.js";
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

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

const useStyles = makeStyles({
  test: {
    flexGrow: 1,
  },
});



function App () {

  const onSubmit = (fields) => {
    console.log ("App com got : ", fields );
  };
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
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
      
    <Paper className={classes.test}>
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="white"
        textColor="black" 
      >
        <Tab label="Dossier" />
        <Tab label="Statistiques" />
        <Tab label="+" />
      </Tabs>
      </AppBar>
    </Paper>
      {value === 0 && <TabContainer>Dossier</TabContainer>}
      {value === 1 && <TabContainer>Statistique</TabContainer>}
      {value === 2 && <TabContainer><Form onSubmit = {fields => this.onSubmit (fields) } 
      /></TabContainer>}
      
      </div>
    );
  
}

export default App;
