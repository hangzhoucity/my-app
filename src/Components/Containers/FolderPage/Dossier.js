import React, { useState } from 'react';
import SelectTest from "./SelectTest";
import CheckedList from "./CheckedList";
import _ from 'lodash';
import styled from 'styled-components'

const Dossier = () => {
  const select = <SelectTest></SelectTest>; 
  const selectorList = [select];
  const [selectors,setSelectors] = useState();

  const handleSelect = selector = event =>{
    console.log ("bchange", selectors)
    setSelectors(event.target.value(selector));
  }

    return (
      

      <div>
        
        {selectorList.map (select => {
          return(
      <SelectTest 
      onClick={handleSelect}
      value ={select[i]}
      />
          )
     
     
           } )
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

