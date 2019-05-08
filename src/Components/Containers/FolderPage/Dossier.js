import React, { useState } from 'react';
import SelectTest from "./SelectTest";
import CheckedList from "./CheckedList";
import _ from 'lodash';
import styled from 'styled-components'

const Dossier = () => {
  const select = <SelectTest></SelectTest>; 
  const selectorList = [select];

  const [selectors,setSelectors] = useState("");

  for (let i = 0; i < selectorList; i++) {
    selectorList.push( 
       <SelectTest
         value = {select[i]}
       />
        

    )
  }

  const handleSelect = event =>{
    console.log ("bchange", selectors)
    setSelectors(event.target.value(selectors));
  }
  

    return (
      

      <div>
        <SelectTest></SelectTest>
        
        {selectorList.map (select => {
          return(
      <SelectTest 
      onClick={handleSelect}
      value ={select[i]}
      />
    )} )
    }
     <StyleChecked>
        <CheckedList> 
        </CheckedList>
      </StyleChecked>
     </div>
    )

  }



export default Dossier;

const StyleChecked = styled.div`
&&{
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: flex-start;
  align-content: flex-end;

}
`;

