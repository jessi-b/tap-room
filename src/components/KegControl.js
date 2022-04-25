import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';
import CreateKeg from './CreateKeg';

class KegControl extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      kegList: [],
      formDisplayed: false,
      selectedTap: null
    };
  }

  // event handler methods
  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formDisplayed: false,
        selectedTap: null,
      });
    } else {
      this.setState(prevState => ({
        formDisplayed: !prevState.formDisplayed
      }));
    }
  }
  handleCreateKeg = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formDisplayed: false 
    });
  }
  handleSelectTap = (id) => { 
    const selectedTap = this.state.kegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedTap: selectedTap
    });
  }
  handleSellPint = (quantity) => {
    const updateTapQuantity = this.state.kegList.filter(quantity => KegList.id.quantity === quantity * 124);
    if (quantity -1 < 0) {
      return "This keg is empty"
    } else {
      quantity -= 1;
    }
    this.setState({
      updateTapQuantity : updateTapQuantity
    })
  }

  // render method
  render(){
    let currentlyDisplayedState = null;
    let buttonText = null;
    if (this.state.selectedTap != null) {
      currentlyDisplayedState = <KegDetails 
        tap = {this.state.selectedTap} 
      />
      buttonText = "Return to Menu";
    } else if (this.state.formDisplayed) {
      currentlyDisplayedState = <CreateKeg onCreateKeg={this.handleCreateKeg} />
      buttonText = "Return to Menu";
    } else {currentlyDisplayedState = <KegList kegList={this.state.kegList} 
        onSelectTap={this.handleSelectTap}
        onClickSell = {this.handleSellPint}
      />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyDisplayedState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default KegControl;