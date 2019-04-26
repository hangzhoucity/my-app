import React, { Component } from 'react';
import CheckBox from './CheckBox';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const StyledCheckList = styled.div`
 display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: flex-start;
  align-content: flex-end;
`;

const items = [
  'Chirurgie prévue',
  'Chimiothérapie prévue',
  'Radiothérapie prévue',
  'Investigation complétée'
];

class CheckedList extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <CheckBox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
         
            <form onSubmit={this.handleFormSubmit}>
            
              {this.createCheckboxes()}
              <StyledCheckList>
              <Button variant="outlined" className="btn btn-default" type="submit">Congé</Button>
              </StyledCheckList>
            </form>
        
          </div>
        </div>
      </div>
    );
  }
}

export default CheckedList;
