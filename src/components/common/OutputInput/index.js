import React from 'react';
import styles from './styles.module.css';

const OutputInput = ({ isInUse, onClick, isInput }) => {
  const circleModifierClass = isInput
    ? styles.inputCircle
    : styles.outputCircle;
  const circleClasses = `${styles.circle} ${circleModifierClass}`;
  return (
    <div className={styles.clipContainer}>
      <button className={circleClasses} onClick={onClick}></button>
    </div>
  );
};

export default OutputInput;
