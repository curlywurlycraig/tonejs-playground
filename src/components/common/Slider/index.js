import React from 'react';
import styles from './styles.module.css';

const Slider = ({ label, min, max, onChange, value }) => {
  return (
    <label>
      { label }
      <input type='range' className={styles.slider} value={value} min={min} max={max} onChange={onChange} />
    </label>
  )
};

export default Slider;
