import React from 'react';
import Sine from '../Icons/sine';
import Triangle from '../Icons/triangle';
import styles from './styles.module.css';
import Saw from '../Icons/saw';
import Square from '../Icons/square';

const OscillatorTypeSelector = ({ type, onChange }) => {
  return (
    <div className={styles.container}>
      <button disabled={type === 'sine'} onClick={() => onChange('sine')}><Sine /></button>
      <button disabled={type === 'triangle'} onClick={() => onChange('triangle')}><Triangle /></button>
      <button disabled={type === 'square'} onClick={() => onChange('square')}><Square /></button>
      <button disabled={type === 'sawtooth'} onClick={() => onChange('sawtooth')}><Saw /></button>
    </div>
  )
};

export default OscillatorTypeSelector;
