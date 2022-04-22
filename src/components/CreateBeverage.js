// parent component for CreateBeverage.js and TicketList.js
// function-based
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import Form from "./FormBase";

function CreateBeverage(props) {
  function handleCreateBeverage(event) {
    event.preventDefault();
    props.onCreateBeverage({
      name: event.target.name.value, 
      description: event.target.description.value, 
      inventory: event.target.inventory.value, 
      price: event.target.price.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Form 
        formSubmissionHandler={handleCreateBeverage}
        buttonText="Submit" />
    </React.Fragment>
  );
}

CreateBeverage.propTypes = {
  onCreateBeverage: PropTypes.func
};

export default CreateBeverage;