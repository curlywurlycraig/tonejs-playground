import React from 'react';
import styles from './styles.module.css';
import { createDelayNode, createLimiterNode, createMasterNode, createSynthNode } from '../../../util/nodes';

const Toolbar = ({ onAddNode }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => onAddNode(createMasterNode(100, 100))}>Add Master Node</button>
      <button onClick={() => onAddNode(createSynthNode(100, 100))}>Add Synth Node</button>
      <button onClick={() => onAddNode(createDelayNode(100, 100))}>Add Delay Node</button>
      <button onClick={() => onAddNode(createLimiterNode(100, 100))}>Add Limiter Node</button>
    </div>
  )
};

export default Toolbar;
