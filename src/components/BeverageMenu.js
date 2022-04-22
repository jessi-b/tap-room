import React from "react";
import PropTypes from "prop-types";
import SubtractPint from "./SubtractPint";

function BeverageMenu(props){  // using properties from parent BeverageList
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectBeverage(props.id)}> 
        <h3>{props.name}  $ {props.price}</h3>
        <p><em>{props.description}</em></p>
        <p>
          {(props.inventory)*124} pints available
          {/* button to subtract pint */}
          {/* button to add keg */}
          </p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

BeverageMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  inventory: PropTypes.number,
  id: PropTypes.string,
  onSelectBeverage: PropTypes.func 
};

export default BeverageMenu;