import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const checkbox = (props) => {
  const { handleCheckboxChange, label } = props;

  const [isChecked, setChecked]= useState('');

 const  toggleCheckboxChange = () => {
    setChecked(!isChecked)
    handleCheckboxChange(label);
  }

    return (
      <div className="checkbox">
        <label>
          <Checkbox 
              type= "checkbox"
              value={label}
              checked={isChecked}
              onChange={toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }

export default checkbox;