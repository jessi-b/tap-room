import React from "react";
import PropTypes from "prop-types";

function BeverageMenu(props){ 
  const {onClickSell} = props;
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
        <button onClick={()=> onClickSell()}>Sell Pint</button>
        {/* <button onClick={() => props.onClickSell(props.quantity)}>Sell Pint</button> */}
        </p>
      <hr/>

    </React.Fragment>
  );
}

BeverageMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  onSelectBeverage: PropTypes.func,
  onClick: PropTypes.func,
  onClickSell: PropTypes.func
};

export default BeverageMenu;