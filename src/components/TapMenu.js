import React from "react";
import PropTypes from "prop-types";

function TapMenu(props){ 
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectTap(props.id)}> 
        <h3>{props.name}  {"$"+(props.price)}</h3>
      </div>
      <p><em>{props.description}</em></p>
      <p>{(props.quantity)*124 + " pints available"}</p>
    </React.Fragment>
  );
}

TapMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  onSelectTap: PropTypes.func
};

export default TapMenu;