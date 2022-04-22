import React from 'react';

const SubtractPint = ({count, decreaseCount}) => {
  return(
    <button onClick={() => decreaseCount(count - 1)}>-</button>
  )
}

export default SubtractPint;