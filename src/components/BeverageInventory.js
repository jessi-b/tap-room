import React from 'react';
import BeverageMenu from './BeverageMenu';
import PropTypes from "prop-types";

function BeverageInventory(props){
  return (
    <React.Fragment>
      <hr/>
      {props.beverageInventory.map((beverage) =>
        <BeverageMenu
          onSelectBeverage = {props.onSelectBeverage}
          name={beverage.name}
          description={beverage.description}
          quantity={beverage.quantity}
          price={beverage.price}
          id={beverage.id}
          key={beverage.id}
        />
      )}
    </React.Fragment>
  );
}

BeverageInventory.propTypes = {
  beverageInventory: PropTypes.array,
  onSelectBeverage: PropTypes.func
};

export default BeverageInventory;