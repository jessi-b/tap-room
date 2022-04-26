import React from "react";
import PropTypes from "prop-types";

function SellPint(props){
  const {keg} = props;

  function handleSellPintSubmission(event) {
    props.onSellPint({
      quantity: event.target.quantity.value
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
  ticket: PropTypes.object,
  onUpdateTicket: PropTypes.func
};

export default SellPint;