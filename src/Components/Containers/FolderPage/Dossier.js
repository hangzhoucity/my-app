import React, { useState } from "react";
import SelectTest from "./SelectTest";
import CheckedList from "./CheckedList";
import _ from "lodash";
import styled from "styled-components";
import ExamComponent from "./ExamComponent";
import TimeComponent from "./TimeComponent";
const { DateTime } = require("luxon");


const Dossier = () => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");

 

  return(
  <div>
    
    <ExamComponent />

    <TimeComponent />

    <StyleChecked>
      <CheckedList />
    </StyleChecked>
  </div>
  )
};

export default Dossier;

const StyleChecked = styled.div`
  && {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: flex-start;
    align-content: flex-end;
  }
`;
