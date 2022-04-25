import React from "react";
import PropTypes from "prop-types";

function TapMenu(props){ 
  const {onClickSell} = props;
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectTap(props.id)}> 
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

TapMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  onSelectTap: PropTypes.func,
  onClick: PropTypes.func,
  onClickSell: PropTypes.func
};

export default TapMenu;