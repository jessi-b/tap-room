import React from 'react';
import BeverageInventory from './BeverageInventory';
import BeverageMenu from './BeverageMenu';
import BeverageDetails from './BeverageDetails';
import CreateBeverage from './CreateBeverage';
import UpdateBeverage from './UpdateBeverage';
import SubtractPint from './SubtractPint';

class BeverageControl extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      beverageInventory: [],
      formDisplayed: false,
      selectedBeverage: null,
      updateDetails: false,
      updateQuantity: ""
    };
  }

  // event handler methods
  handleClick = () => {
    if (this.state.selectedBeverage != null) {
      this.setState({
        formDisplayed: false,
        selectedBeverage: null,
        updateDetails: false
      });
    } else {
      this.setState(prevState => ({
        formDisplayed: !prevState.formDisplayed
      }));
    }
  }
  handleCreateBeverage = (newBeverage) => {
    const newBeverageInventory = this.state.beverageInventory.concat(newBeverage);
    this.setState({
      beverageInventory: newBeverageInventory,
      formDisplayed: false 
    });
  }
  handleSelectingBeverage = (id) => { 
    const selectedBeverage = this.state.beverageInventory.filter(beverage => beverage.id === id)[0];
    this.setState({
      selectedBeverage: selectedBeverage
    });
  }
  handleDeleteBeverage = (id) => {
    const newBeverageInventory = this.state.beverageInventory.filter(beverage => beverage.id !== id);
    this.setState({
      beverageInventory: newBeverageInventory,
      selectedBeverage: null
    });
  }
  handleUpdateBeverage = () => {
    console.log("handleUpdateBeverage reached!");
    this.setState({
      updateDetails: true
    });
  }
  handleUpdateBeverageInventory = (beverageUpdateDetails) => {
    const updateBeverageInventory = this.state.beverageInventory
      .filter(beverage => beverage.id !== this.state.selectedBeverage.id)
      .concat(beverageUpdateDetails);
    this.setState({
      beverageInventory: updateBeverageInventory,
      updateDetails: false,
      selectedBeverage: null
    });
  }
  handleSubtractPint = (beveragePintCount) => {
    const updatePintCount = this.state.pndateQuantity
    .filter(beverage => beverage.id !== this.state.selectedBeverage.id)
    .concat(beveragePintCount)
    this.setState({
      pintCount: updatePintCount,
      selectedBeverage: null
    });
  }
  handleAddKeg = (beverageKegCount) => {
    const updateKegCount = this.state.updateQuantity
    .filter(beverage => beverage.id !== this.state.selectedBeverage.id)
    .concat(beverageKegCount)
    this.setState({
      kegCount: updateKegCount,
      selectedBeverage: null
    });
  }
  
  // render method
  render(){
    let currentlyDisplayedState = null;
    let buttonText = null;
    if (this.state.updateDetails ) {      
      currentlyDisplayedState = <UpdateBeverage beverage = {this.state.selectedBeverage} 
        onUpdateBeverage = {this.handleUpdateBeverageInventory}/>
      buttonText = "Return to Menu";
    } else if (this.state.selectedBeverage != null) {
      currentlyDisplayedState = <BeverageDetails 
        beverage = {this.state.selectedBeverage} 
        onClickDelete = {this.handleDeleteBeverage} 
        onClickUpdate = {this.handleUpdateBeverage}
      />
      buttonText = "Return to Menu";
    } else if (this.state.formDisplayed) {
      currentlyDisplayedState = <CreateBeverage onCreateBeverage={this.handleCreateBeverage} />
      buttonText = "Return to Menu";
    } else {
      currentlyDisplayedState = <BeverageInventory beverageInventory={this.state.beverageInventory} 
        onSelectBeverage={this.handleSelectingBeverage}
        onClickAdd = {this.handleAddKeg} 
        onClickSubtract = {this.handleSubtractKeg}
      />;
      // <SubtractPint inventoryCount={this.state.inventoryCount} decreaseCount={(inventoryCount) => this.setState({inventoryCount})}/>
      buttonText = "Add Beverage";
      
      // button2 = "Manage Inventory";
    }
    return (
      <React.Fragment>
        {currentlyDisplayedState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default BeverageControl;