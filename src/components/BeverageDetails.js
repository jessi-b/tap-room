import React from "react"; //
import PropTypes from "prop-types";

function BeverageDetails(props){ //
  const { beverage, onClickDelete } = props;
  return ( //
    <React.Fragment> {/**/}
      <h3>{beverage.name}</h3>
      <p><em>{beverage.description}</em></p>
      <p>{"$"+(beverage.price)+"/pint"}</p>
      <p>{(beverage.quantity)+" keg(s)"} // {((beverage.quantity)*124)+" pints(s)"}</p>
      <br/>
      <button onClick={props.onClickUpdate}>Update Details</button>
      <button onClick={()=> onClickDelete(beverage.id) }>Delete</button>
      {/* button to menu */}
      {/* button to inventoryrecon. */}
    </React.Fragment>
  );
}

BeverageDetails.propTypes = {
  beverage: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickUpdate: PropTypes.func
};

export default BeverageDetails;