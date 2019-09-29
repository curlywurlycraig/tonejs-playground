import React from 'react';

const Checkbox = ({ checked, onChange, disabled, label }) => {
  return (
    <label>
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </label>
  );
};

export default Checkbox;
