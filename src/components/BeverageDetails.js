import React from "react"; //
import PropTypes from "prop-types";

function BeverageDetails(props){ //
  const { beverage, onClickingDelete } = props;
  return ( //
    <React.Fragment> {/**/}
      <h3>{beverage.name}</h3>
      <p>{beverage.company}</p>
      <p>{beverage.cost}</p>
      <p>{beverage.description}</p>
      <p>{beverage.price}</p>
      <br/>
      <button onClick={props.onClickingUpdate}>Update Details</button>
      <button onClick={()=> onClickingDelete(beverage.id) }>Delete</button>
      {/* button to menu */}
      {/* button to inventoryrecon. */}
    </React.Fragment>
  );
}

BeverageDetails.propTypes = {
  beverage: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpdate: PropTypes.func
};

export default BeverageDetails; //