import React, { useState } from 'react';
import SelectTest from "./SelectTest";
import CheckedList from "./CheckedList";
import _ from 'lodash';
import styled from 'styled-components'

const Dossier = () => {
  
  const [selectors,setSelectors] = useState(0);
  // const newSelector = <SelectTest onClick={addSelectors}/>
 

  const addSelectors = () =>{
    console.log("aallo",selectors)
      setSelectors(selectors+1)
  }

  const selectorsArray = () =>{
    console.log("sdfdsf")
    const returnSelector=[];
    for (let i=0; i < selectors; i++){
        returnSelector.push(<SelectTest onClick={addSelectors}/>)
    }
    return returnSelector;
  }
  const x = selectorsArray();
  return (
    <div>
      <SelectTest onClick={addSelectors}/>
     {_.map(x,(element) => {
       return element})}
      <StyleChecked>
        <CheckedList />
      </StyleChecked>
    </div>
  );
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


