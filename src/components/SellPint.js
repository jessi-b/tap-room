import React from "react";
import PropTypes from "prop-types";

function SellPint(props){
  const {keg} = props;
  function handleSellPint(event) {
    props.onSellPint({
      quantity: event.target.quantity.value,
      id: keg.id
    });
  }
  return (
    <React.Fragment>
      formSubmissionHandler={handleSellPint} 
    </React.Fragment>
  );
}

SellPint.propTypes = {
  tap: PropTypes.object,
  onSellPint: PropTypes.func
};

export default SellPint;