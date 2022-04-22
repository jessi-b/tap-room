import React from "react";
import PropTypes from "prop-types";

function BeverageMenu(props){  // using properties from parent BeverageList
  return (
    <React.Fragment>
      {/* onclick goes to beverage details */}
      <div onClick = {() => props.whenBeverageClicked(props.id)}> 
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
  whenBeverageClicked: PropTypes.func 
};

export default BeverageMenu;