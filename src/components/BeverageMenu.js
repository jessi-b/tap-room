import React from "react";
import PropTypes from "prop-types";
import SubtractPint from "./SubtractPint";

function BeverageMenu(props){  // using properties from parent BeverageList
  return (
    <React.Fragment>
      <h2>MENU</h2>
      {/* onclick goes to beverage details */}
      <div onClick = {() => props.onSelectBeverage(props.id)}> 
        <h3>{props.name}  $ {props.price}</h3>
        <p><em>{props.description}</em></p>
        {/* button to "sell" pint */}
        <hr/>
        {/* button to update inventory */}
      </div>
    </React.Fragment>
  );
}

BeverageMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  onSelectBeverage: PropTypes.func 
};

export default BeverageMenu;