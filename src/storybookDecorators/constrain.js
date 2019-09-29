import React from 'react';
import styles from './constrain.module.css';

export const ConstrainWidthDecorator = storyFn => (
  <div className={styles.constrainWidth}>{storyFn()}</div>
);
