// parent component for CreateBeverage.js and TicketList.js
// function-based
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import Form from "./FormBase";

function CreateBeverage(props) {
  function handleCreateBeverageSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      name: event.target.name.value, 
      description: event.target.description.value, 
      company: event.target.company.value, // stretch: add co contact & account details
      cost: event.target.cost.value, 
      inventory: event.target.inventory.value, 
      price: event.target.price.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Form 
        formSubmissionHandler={handleCreateBeverageSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

CreateBeverage.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default CreateBeverage;