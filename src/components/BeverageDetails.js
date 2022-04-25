import React from "react"; //
import PropTypes from "prop-types";

function BeverageDetails(props){ 
  const {beverage} = props;
  return ( 
    <React.Fragment> 
      <h3>{beverage.name}</h3>
      <p><em>{beverage.description}</em></p>
      <p>{"$"+(beverage.price)+"/pint"}</p>
      <p>{(beverage.quantity)+" keg(s)"} // {((beverage.quantity)*124)+" pints(s)"}</p>
      <br/>
    </React.Fragment>
  );
}

BeverageDetails.propTypes = {
  beverage: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickUpdate: PropTypes.func
};

export default BeverageDetails;