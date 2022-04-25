import React from "react";
import PropTypes from "prop-types";

function KegDetails(props){ 
  const {tap} = props;
  return ( 
    <React.Fragment> 
      <h3>{tap.name}</h3>
      <p><em>{tap.description}</em></p>
      <p>{"$"+(tap.price)+"/pint"}</p>
      <p>{(tap.quantity)+" keg(s)"} || {((tap.quantity)*124)+" pints(s)"}</p>
      <br/>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  tap: PropTypes.object
};

export default KegDetails;