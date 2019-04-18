import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const Dossier = () => {
 
    return(
        <div>
console.log("hi")
<p> "Dr Paul Tran | Dossier ouver le 16 avril" </p>

<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabelRef} htmlFor="outlined-age-native-simple">
          Test
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          input={
            <OutlinedInput
              name="age"
              labelWidth={state.labelWidth}
              id="outlined-age-native-simple"
            />
          }
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
</div>
 );

};

export default Dossier;


