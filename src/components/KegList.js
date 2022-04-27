import React from 'react';
import TapMenu from './TapMenu';
import PropTypes from "prop-types";

function KegList(props){
  const {onSellPint} = props;
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
      <React.Fragment>
        <TapMenu
          onSelectTap = {props.onSelectKeg}
          name={keg.name}
          description={keg.description}
          quantity={keg.quantity}
          price={keg.price}
          id={keg.id}
          key={keg.id}
        />
        <button onClick = {() => onSellPint(keg.id)}>Sell Pint</button>
        <hr/>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onSelectKeg: PropTypes.func,
  onSellPint: PropTypes.func
};

export default KegList;