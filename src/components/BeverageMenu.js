import React from "react";
import PropTypes from "prop-types";

function BeverageMenu(props){ 
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectBeverage(props.id)}> 
        <h3>{props.name}  {"$"+(props.price)}</h3>
      </div>
      <p><em>{props.description}</em></p>
      <p>{(props.quantity)*124 + " pints available"}</p>
      <p>
      {/* <div onClick = {() => props.onClickSell(props.id)}> 
        <p>Sell Pint</p>
      </div> */}

        <button onClick={() => props.onClickSell(props.id)}>Sell Pint</button>
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
  onClickSell: PropTypes.func
};

export default BeverageMenu;