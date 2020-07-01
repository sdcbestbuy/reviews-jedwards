import React from 'react';

// Simple Checkbox functional component
const Checkbox = cb => {
  return (
    <span className="insideMiniLi" type="compare">
      <label className="checkbox">
        <input type="checkbox"></input>
        <span></span>
      </label>
    </span>
  )
}
export default Checkbox