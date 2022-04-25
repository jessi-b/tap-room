import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import Form from "./FormBase";

function CreateKeg(props) {
  function handleCreateKeg(event) {
    event.preventDefault();
    props.onCreateKeg({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: event.target.quantity.value, 
      price: event.target.price.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Form 
        formSubmissionHandler={handleCreateKeg}
        buttonText="Submit" />
    </React.Fragment>
  );
}

CreateKeg.propTypes = {
  onCreateKeg: PropTypes.func
};

export default CreateKeg;