import React from 'react';
import styles from './styles.module.css';

const Pylon = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.circle} onClick={onClick} />
      <div className={styles.line} />
    </div>
  )
};

export default Pylon;
