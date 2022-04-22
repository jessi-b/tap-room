import React from 'react';

const AddKeg = ({count, increaseCount}) => {
  return(
    <button onClick={() => increaseCount(count + 124)}>+</button>
  )
};

export default AddKeg;