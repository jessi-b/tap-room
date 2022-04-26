import React from "react";
import PropTypes from "prop-types";

function SellPint(props){
  const {keg} = props;
  function handleSellPint(event) {
    props.onSellPint({
      quantity: event.target.quantity.value - 1,
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
  keg: PropTypes.object,
  onSellPint: PropTypes.func
};

export default SellPint;