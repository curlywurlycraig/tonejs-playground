import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';
import OutputInput from '../../common/OutputInput';
import styles from './styles.module.css';
import { useNode } from '../../../hooks/node';
import Slider from '../../common/Slider';
import EnvelopeEditor from '../../common/EnvelopeEditor';

const SynthNode = ({ activeOutputs, onClickOutput }) => {
  const nodeRef = useNode(new Tone.Synth(), []);

  const [envelope, setEnvelope] = useState({
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  });

  useEffect(() => {
    setInterval(() => {
      nodeRef.current.triggerAttackRelease('C4', '8n');
    }, 2000);
  }, [nodeRef]);

  useEffect(() => {
    nodeRef.current.envelope.attack = envelope.attack;
    nodeRef.current.envelope.decay = envelope.decay;
    nodeRef.current.envelope.sustain = envelope.sustain;
    nodeRef.current.envelope.release = envelope.release;
  }, [nodeRef, envelope]);

  return (
    <DraggableBox title="Synth">
      <div className={styles.container}>
        <EnvelopeEditor envelope={envelope} onChange={setEnvelope} />
        <div className={styles.outputsContainer}>
          <OutputInput onClick={() => onClickOutput(nodeRef.current)} />
        </div>
      </div>
    </DraggableBox>
  );
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
