import React from 'react';

const Slider = ({ label, min, max, onChange, value }) => {
  return (
    <label>
      { label }
      <input type='range' value={value} min={min} max={max} onChange={onChange} />
    </label>
  )
};

export default Slider;
