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
      onSelectBeverage: null,
      updating: false
    };
  }

  // event handler methods
  handleClick = () => {
    if (this.state.onSelectBeverage != null) {
      this.setState({
        formDisplayed: false,
        onSelectBeverage: null,
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
    const onSelectBeverage = this.state.beverageInventory.filter(beverage => beverage.id === id)[0];
    this.setState({
      onSelectBeverage: onSelectBeverage
    });
  }
  handleDeleteBeverage = (id) => {
    const newBeverageInventory = this.state.beverageInventory.filter(beverage => beverage.id !== id);
    this.setState({
      beverageInventory: newBeverageInventory,
      onSelectBeverage: null
    });
  }
  handleUpdateBeverage = () => {
    console.log("handleUpdateBeverage reached!");
    this.setState({
      updating: true
    });
  }
  handleUpdateBeverageInventory = (onSelectBeverage) => {
    const updateBeverageInventory = this.state.beverageInventory
      .filter(beverage => beverage.id !== this.state.onSelectBeverage.id)
      .concat(onSelectBeverage);
    this.setState({
      beverageInventory: updateBeverageInventory,
      updating: false,
      onSelectBeverage: null
    });
  }
  
  // render method
  render(){
    let currentlyDisplayedState = null;
    let button1 = null; 
    let button2 = null;
    if (this.state.updating ) {      
      currentlyDisplayedState = <UpdateBeverage beverage = {this.state.onSelectBeverage} onUpdateBeverage = {this.handleUpdateBeverageInventory}/>
      button1 = "Menu";
      button2 = "Inventory";
    } else if (this.state.onSelectBeverage != null) {
      currentlyDisplayedState = <BeverageDetails 
        beverage = {this.state.onSelectBeverage} 
        onClickingDelete = {this.handleDeleteBeverage} 
        onClickingUpdate = {this.handleUpdateBeverage}
      />
      button1 = "Menu";
      button2 = "Inventory"; 
    } else if (this.state.onSelectBeverage != null) {
      currentlyDisplayedState = <BeverageDetails beverage = {this.state.onSelectBeverage} />
      button1 = "Menu";
      button2 = "Inventory";
    } else if (this.state.formDisplayed) {
      currentlyDisplayedState = <CreateBeverage onCreateBeverage={this.handleCreateBeverage} />
      button1 = "Menu";
      button2 = "Inventory";
    } else {
      currentlyDisplayedState = <BeverageInventory beverageInventory={this.state.beverageInventory} onSelectBeverage={this.handleSelectingBeverage} />;
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