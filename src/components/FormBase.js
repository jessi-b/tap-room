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
          name='inventory'
          placeholder='Inventory (keg/s)' />
        <input
          type="number"
          name='price'
          placeholder='Sale Price $/pint' />
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