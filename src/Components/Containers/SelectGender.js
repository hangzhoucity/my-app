import React from 'react';
import styled from 'styled-components';
import './SelectGender.css';

const StyleGender = styled.label`
padding: .75rem 2rem; box-sizing: border-box;
position: relative; display: inline-block;
border: solid 2px #DDD; background-color: #FFF;
`;

const SelectGender = (props) => {

return (
<body>

<div class="center-align"> 
{`${props.label}`}
<input type="radio" name="size" id="size_1" value="small"  onChange = {e =>props.handleChange(e)} checked/>
 <StyleGender class= "gender" for="size_1">M</StyleGender>
  
 <input type="radio" name="size" id="size_2" value="small" onChange = {e =>props.handleChange(e)}  /> 
 <StyleGender for="size_2">F </StyleGender>
</div>
</body>

    )
}

export default SelectGender;