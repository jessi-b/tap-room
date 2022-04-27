import React from "react";
import PropTypes from "prop-types";

function TapMenu(props){ 
  return (
    <React.Fragment>
      <div onClick = {() => props.onSelectTap(props.id)}> 
        <h3>{props.name}  {"$"+(props.price)}</h3>
      </div>
      <p><em>{props.description}</em></p>
      <p>{Math.round((props.quantity)*124) + " pints available"}</p>
    </React.Fragment>
  );
}

TapMenu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onSelectTap: PropTypes.func
};

export default TapMenu;