import React, { Component } from 'react';
import CheckBox from './CheckBox';
import styled from 'styled-components'
import { Button, Confirm } from 'semantic-ui-react'

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

  state = { open: false, result: 'show the modal to capture a result' }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleNoCancer = () => this.setState({ result: 'No cancer', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })

  render() {
    const { open, result } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
         
            <form onSubmit={this.handleFormSubmit}>
            
              {this.createCheckboxes()}
              <StyledCheckList>
              <p>
        Result: <em>{result}</em>
      </p>      
              <Button variant="outlined" className="btn btn-default" type="submit" onClick={this.show}>Congé</Button>
              <Confirm open={open} onCancel={this.handleCancel} onConfirm={this.handleConfirm} onNoCancer = {this.handleNoCancer}/>
              </StyledCheckList>
            </form>
        
          </div>
        </div>
      </div>
    );
  }
}

export default CheckedList;
