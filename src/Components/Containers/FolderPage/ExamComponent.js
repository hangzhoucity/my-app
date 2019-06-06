import React, { useState } from "react";
import SelectTest from "./SelectTest";
import _ from "lodash";



const examComponent = (props) => {

    const [selectors, setSelectors] = useState(0);
 
// const newSelector = <SelectTest onClick={addSelectors}/>

const addSelectors = () => {
  console.log("aallo", selectors);
  setSelectors(selectors + 1);
};

const selectorsArray = () => {
  console.log("sdfdsf");
  const returnSelector = [];
  for (let i = 0; i < selectors; i++) {
    returnSelector.push(
      <SelectTest key={i} onClick={addSelectors} />
    );
  }

return returnSelector;
};
const x = selectorsArray();
return (
  <div>
    <SelectTest onClick={addSelectors} />
    {_.map(x, element => {
      return element;
    })}
    </div>
)
}
    export default examComponent;