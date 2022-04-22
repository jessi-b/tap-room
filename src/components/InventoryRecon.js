import React from "react";
import PropTypes from "prop-types";

function InventoryRecon(props){  // using properties from parent BeverageList
  return (
    <React.Fragment>
      {/* onclick goes to beverage details */}
      <div onClick = {() => props.whenBeverageClicked(props.id)}> 
        <h3>{props.name}  {props.inventory}keg(s)</h3>
        {/* button to add keg */}
        <hr/>
        {/* button to return to menu */}
      </div>
    </React.Fragment>
  );
}

InventoryRecon.propTypes = {
  name: PropTypes.string,
  inventory: PropTypes.string,
  id: PropTypes.string,
  whenBeverageClicked: PropTypes.func 
};

export default InventoryRecon;