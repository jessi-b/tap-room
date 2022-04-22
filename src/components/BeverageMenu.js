import React from "react";
import PropTypes from "prop-types";
import SubtractPint from "./SubtractPint";
import AddKeg from "./AddKeg";

function BeverageMenu(props){ 
  const { beverage, onClickDelete } = props;
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectBeverage(props.id)}> 
        <h3>{props.name}  {"$"+(props.price)}</h3>
      </div>
      <p><em>{props.description}</em></p>
      <p>{(props.quantity)*124 + " pints available"}</p>
      <p>
        <button onClick={props.onClickingSubtract}>Sell Pint</button>
        <button onClick={props.onClickingAdd}>Add Keg</button>
        </p>
      <hr/>

    </React.Fragment>
  );
}

BeverageMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onSelectBeverage: PropTypes.func,
  onClick: PropTypes.func,
  onSelectBeverage: PropTypes.func 
};

export default BeverageMenu;