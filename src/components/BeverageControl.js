import React from 'react';
import BeverageInventory from './BeverageInventory';
// import BeverageMenu from './BeverageMenu';
// import InventoryRecon from './InventoryRecon';
import BeverageDetails from './BeverageDetails';
import CreateBeverage from './CreateBeverage';
import UpdateBeverage from './UpdateBeverage';

class BeverageControl extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false,
      beverageInventory: [],
      onBeverageSelection: null,
      updating: false
    };
  }

  // event handler methods
  handleClick = () => {
    if (this.state.onBeverageSelection != null) {
      this.setState({
        formDisplayed: false,
        onBeverageSelection: null,
        updating: false
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
    const onBeverageSelection = this.state.beverageInventory.filter(beverage => beverage.id === id)[0];
    this.setState({
      onBeverageSelection: onBeverageSelection
    });
  }
  handleDeleteBeverage = (id) => {
    const newBeverageInventory = this.state.beverageInventory.filter(beverage => beverage.id !== id);
    this.setState({
      beverageInventory: newBeverageInventory,
      onBeverageSelection: null
    });
  }
  handleUpdateBeverage = () => {
    console.log("handleUpdateBeverage reached!");
    this.setState({
      updating: true
    });
  }
  handleUpdateBeverageInventory = (onBeverageSelection) => {
    const updateBeverageInventory = this.state.beverageInventory
      .filter(beverage => beverage.id !== this.state.onBeverageSelection.id)
      .concat(onBeverageSelection);
    this.setState({
      beverageInventory: updateBeverageInventory,
      updating: false,
      onBeverageSelection: null
    });
  }
  
  // render method
  render(){
    let currentlyDisplayedState = null;
    let button1 = null; 
    let button2 = null;
    if (this.state.updating ) {      
      currentlyDisplayedState = <UpdateBeverage beverage = {this.state.onBeverageSelection} onUpdateBeverage = {this.handleUpdateBeverageInventory}/>
      button1 = "Menu";
      button2 = "Inventory";
    } else if (this.state.onBeverageSelection != null) {
      currentlyDisplayedState = <BeverageDetails 
        beverage = {this.state.onBeverageSelection} 
        onClickingDelete = {this.handleDeleteBeverage} 
        onClickingUpdate = {this.handleUpdateBeverage}
      />
      button1 = "Menu";
      button2 = "Inventory"; 
    } else if (this.state.onBeverageSelection != null) {
      currentlyDisplayedState = <BeverageDetails beverage = {this.state.onBeverageSelection} />
      button1 = "Menu";
      button2 = "Inventory";
    } else if (this.state.formDisplayed) {
      currentlyDisplayedState = <CreateBeverage onCreateBeverage={this.handleCreateBeverage} />
      button1 = "Menu";
      button2 = "Inventory";
    } else {
      currentlyDisplayedState = <BeverageInventory beverageInventory={this.state.beverageInventory} onTicketSelection={this.handleSelectingBeverage} />;
      button1 = "Add Beverage";
      // button2 = "Manage Inventory";
    }
    return (
      <React.Fragment>
        {currentlyDisplayedState}
        <button onClick={this.handleClick}>{button1}</button> 
        <button onClick={this.handleClick}>{button2}</button> 
      </React.Fragment>
    );
  }
}

export default BeverageControl;