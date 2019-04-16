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
    <Paper className={classes.test}>
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary" 
      >
        <Tab label="Dossier" />
        <Tab label="Statistique" />
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
