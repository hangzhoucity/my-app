import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const StyleSelect = styled.option`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
`;

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ced4da',
    fontSize: 19,
    width: 'auto',
    padding: '15px 70px 15px 70px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 20,
  },
});

const SelectTest = ({classes,onClick}) => {

//   state = {
//     tests: '',
//   };
  const [tests,setTest] =useState('');

//   handleChange = event => {
//     this.setState({ tests: event.target.value });
//   };

  const handleChange = event =>{
      setTest(event.target.value)
  }


    return (
      <div>
      <form className={classes.root} autoComplete="off">
       
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-native-simple" className={classes.bootstrapFormLabel}>
          </InputLabel>
          <NativeSelect
            value={tests}
            onChange={handleChange}
            input={<BootstrapInput name="age" id="age-customized-native-simple" />}
            onClick={onClick}
          >
          
            <StyleSelect> Nouvelle examen </StyleSelect>
            <StyleSelect value={1}>Bronchoscopie</StyleSelect>
            <StyleSelect value={2}>BTT</StyleSelect>
            <StyleSelect value={3}>Biopsie Métastase</StyleSelect>
            <StyleSelect value={4}>CT cérébral</StyleSelect>
            <StyleSelect value={5}>CT abdo-pelvien</StyleSelect>
            <StyleSelect value={6}>EBUS</StyleSelect>
            <StyleSelect value={7}>EUS</StyleSelect>
            <StyleSelect value={8}>Épreuve Effort</StyleSelect>
            <StyleSelect value={9}>IRM célébral</StyleSelect>
            <StyleSelect value={10}>Scintigraphie osseuse</StyleSelect>
            <StyleSelect value={11}>Scintigraphie perfusion</StyleSelect>
            <StyleSelect value={12}>TEP-CT</StyleSelect>
            <StyleSelect value={13}>TFR</StyleSelect>
            <StyleSelect value={14}>Autre</StyleSelect>
           
          </NativeSelect>
        </FormControl>
        
      </form>
      </div>
    );
  }




export default withStyles(styles)(SelectTest);