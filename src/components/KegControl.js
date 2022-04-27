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
      selectedTap: null,
      sellPint: false
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

  handleSellPintClick = () => {
    console.log("pint sold");
    this.setState({
      sellPint: true
    });
  }

  handleSellPint = (id) => {
    const updateKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    if ((updateKeg.quantity*124) - 1 < 0) {
      updateKeg.quantity = 0;
    } else {
      updateKeg.quantity -= 1;
    }
    const updateKegList = this.state.kegList
      .filter(keg => keg.id !== id)
      .concat(updateKeg);
    this.setState({
      kegList: updateKegList,
      selectedTap: null,
      sellPint: false
    });
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
    } else {
      currentlyDisplayedState = <KegList kegList={this.state.kegList} 
      onSelectTap = {this.handleSelectTap}
      onSellPint = {this.handleSellPint}
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