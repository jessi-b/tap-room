import React from "react";
import PropTypes from "prop-types";

function InventoryRecon(props){
  // const AddKeg = ({count, increaseCount}) => {
  return (
    <React.Fragment>
      <h2>INVENTORY</h2>
      <div onClick = {() => props.whenBeverageClicked(props.id)}> 
        <h3>{props.name}  {props.inventory}keg(s)</h3>
        {/* <button onClick={() => increaseCount(count + 124)}>+</button> */}
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