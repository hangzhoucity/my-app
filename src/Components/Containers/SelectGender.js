import React, { Component } from 'react'
import styled from 'styled-components'

const StyleBox = styled.div`
    margin: 0; box-sizing: border-box;
	width: 25%; height: 50%;
	font-size: 20px; 
    box-sizing: border-box;
	display: flex; flex-flow: row nowrap;
    justify-content: flex-start; 
    padding: .75rem 2rem;
	display: inline-block;
	border: solid 1px #DDD; background-color: #FFF;
    line-height: 140%; text-align: center;
    border-radius: 6px 0 0 6px;
    margin-left:10px
`;

const StyleInputGender = styled.input`
visibility:hidden;


`;

const SelectGender = (props) => {

    return (

<StyleBox class="toggle">
         <label id = {props.firstName}> {`${props.label}`}
         <StyleInputGender type={props.radio} 
         name={props.firstName}
         defaultValue={props.value}
         checked = {props.checked}
         onChange = {e =>props.handleChange(e)} required />
         </label>
</StyleBox>

    )
}

export default SelectGender;