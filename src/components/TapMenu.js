import React from "react";
import PropTypes from "prop-types";

function TapMenu(props){ 
  const { onClickSell} = props;
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectTap(props.id)}> 
        <h3>{props.name}  {"$"+(props.price)}</h3>
      </div>
      <p><em>{props.description}</em></p>
      <p>{(props.quantity)*124 + " pints available"}</p>
      <button onClick={()=> onClickSell(props.id)}>Sell Pint</button>
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