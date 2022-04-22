import React from 'react';
import BeverageMenu from './BeverageMenu';
import InventoryRecon from './InventoryRecon';
import PropTypes from "prop-types";

function BeverageInventory(props){
  return (
    <React.Fragment>
      <hr/>
      {props.beverageInventory.map((beverage) =>
        <BeverageMenu
          whenBeverageClicked = {props.onBeverageSelection}
          name={beverage.name}
          description={beverage.description}
          company={beverage.description}
          cost={beverage.cost}
          inventory={beverage.inventory}
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
  onBeverageSelection: PropTypes.func
};

export default BeverageInventory;