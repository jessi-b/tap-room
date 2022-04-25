import React from 'react';
import BeverageInventory from './BeverageInventory';
import BeverageDetails from './BeverageDetails';
import CreateBeverage from './CreateBeverage';
// import SubtractPint from './SubtractPint';

class BeverageControl extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      beverageInventory: [],
      formDisplayed: false,
      selectedBeverage: null
    };
  }

  // event handler methods
  handleClick = () => {
    if (this.state.selectedBeverage != null) {
      this.setState({
        formDisplayed: false,
        selectedBeverage: null,
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
  handleSelectBeverage = (id) => { 
    const selectedBeverage = this.state.beverageInventory.filter(beverage => beverage.id === id)[0];
    this.setState({
      selectedBeverage: selectedBeverage
    });
  }
  handleSellPint = (quantity) => {
    const updateBeverageInventory = this.state.updateBeverageInventory.filter(beverage => (beverage.quantity * 124)-1)
    this.setState({
      beverageInventory : updateBeverageInventory
    })
  }

  // render method
  render(){
    let currentlyDisplayedState = null;
    let buttonText = null;
    if (this.state.selectedBeverage != null) {
      currentlyDisplayedState = <BeverageDetails 
        beverage = {this.state.selectedBeverage} 
      />
      buttonText = "Return to Menu";
    } else if (this.state.formDisplayed) {
      currentlyDisplayedState = <CreateBeverage onCreateBeverage={this.handleCreateBeverage} />
      buttonText = "Return to Menu";
    } else {currentlyDisplayedState = <BeverageInventory beverageInventory={this.state.beverageInventory} 
        onSelectBeverage={this.handleSelectBeverage}
        onClickSell = {this.handleSellKeg}
      />;
      // <SellPint inventoryCount={this.state.inventoryCount} decreaseCount={(inventoryCount) => this.setState({inventoryCount})}/>
      buttonText = "Add Beverage";
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