import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Space = styled.div`
margin: 10px;
`;

const StyleInput = styled.input`
width:200px;
height:40px;
font-size:14px;
margin-left:10px;
border-radius: 10px;
`;

const StyleLabel = styled.label`
font-size:20px; 
`;


const DatePicker = (props) => {
// console.log("sdfdsf")
const { classes } = props;
    return (
        <form ClassName = {classes}>
        <Space>
        <StyleLabel id = {props.firstName}> {`${props.label}`}
        <StyleInput type="date"
          name={props.firstName}
          defaultValue="AAA-MM-JJ"
          onChange = {e =>props.handleChange(e)} 
          InputLabelProps={{
            shrink: true,
          }}/>
        </StyleLabel>
        </Space>
        </form>
        
      );
      
      };
    
    DatePicker.propTypes = {
        classes: PropTypes.object.isRequired,
};

export default DatePicker;