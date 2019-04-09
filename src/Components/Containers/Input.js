import React, { Component } from 'react'
import styled from 'styled-components'

const Space = styled.div`
margin: 20px;
`;

const StyleInput = styled.input`
width:200px;
height:40px;
font-size:14px;
margin-left:10px;
border-radius: 10px;
`;

const StyleLabel = styled.label`
font-size:16px; 
`;

const Input = (props) => {
// console.log("sdfdsf")
    return (
        <Space>
        <StyleLabel id = {props.firstName}> {`${props.label}:`}
        <StyleInput type={props.text} 
          name={props.firstName}
          defaultValue={props.value}
          onChange = {e =>props.handleChange(e)} required/>
        </StyleLabel>
        </Space>
    )
}

export default Input;