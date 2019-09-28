import React, { useEffect } from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';
import OutputInput from '../../common/OutputInput';
import styles from './styles.module.css';
import { useNode } from '../../../hooks/node';

const SynthNode = ({ activeOutputs, onClickOutput }) => {
  const nodeRef = useNode(new Tone.Synth(), []);

  useEffect(() => {
    setInterval(() => {
      nodeRef.current.triggerAttackRelease("C4", "8n");
    }, 2000);
  }, []);

  return (
    <DraggableBox title="Synth">
      <div className={styles.container}>
        <p>Synth controls go here.</p>
        <div className={styles.outputsContainer}>
          <OutputInput onClick={() => onClickOutput(nodeRef.current)}/>
        </div>
      </div>
    </DraggableBox>
  )
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
