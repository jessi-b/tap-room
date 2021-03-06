import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beverage' />
        <textarea
          name='description'
          placeholder='Description' />
        <input
          type="number"
          min="0"
          max="50"
          name='quantity'
          placeholder='Quantity (keg/s)' />
        <input
          type="number"
          min="0"
          max="10"
          name='price'
          placeholder='$/pint' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Form;