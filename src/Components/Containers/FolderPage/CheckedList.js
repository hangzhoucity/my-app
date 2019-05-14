import React, { Component } from 'react';
import CheckBox from './CheckBox';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';


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

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {

    return (

      
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
         
            <form onSubmit={this.handleFormSubmit}>
            
              {this.createCheckboxes()}
              <StyledCheckList>
                 
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Congé</Button>
              <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          
          
        >
          <DialogTitle id="draggable-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Donner congé au patient?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Oui
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Non
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Pas de cancer
            </Button>
          </DialogActions>
        </Dialog>
              </StyledCheckList>
            </form>
        
          </div>
        </div>
      </div>
    );
  }
}

export default CheckedList;
