import React from "react";
import Form from "./FormBase";
import PropTypes from "prop-types";

function UpdateBeverage(props){
  const { beverage } = props;

  function handleUpdateBeverageSubmission(event) {
    event.preventDefault();
    props.onUpdateTicket({
      name: event.target.name.value, 
      description: event.target.description.value, 
      company: event.target.company.value, 
      cost: event.target.cost.value, 
      inventory: event.target.inventory.value, 
      price: event.target.price.value, 
      id: beverage.id()
    });
  }

  return (
    <React.Fragment>
      <Form 
        formSubmissionHandler={handleUpdateBeverageSubmission} 
        buttonText="Update Beverage Details" />
    </React.Fragment>
  );
}

UpdateBeverage.propTypes = {
  beverage: PropTypes.object,
  onUpdateTicket: PropTypes.func
};

export default UpdateBeverage;