import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import EnvelopeEditor from '../../common/EnvelopeEditor';
import { useInput } from '../../../hooks/input';
import OscillatorTypeSelector from '../../common/OscillatorTypeSelector';
import styles from './styles.module.css';

const SynthNode = nodeProps => {
  const [nodeRef, Container] = useNode(new Tone.Synth({ volume: -10 }), nodeProps);

  useInput(nodeRef);

  const [envelope, setEnvelope] = useState({
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  });

  const [oscillatorType, setOscillatorType] = useState('sine');

  useEffect(() => {
    nodeRef.current.envelope.attack = envelope.attack;
    nodeRef.current.envelope.decay = envelope.decay;
    nodeRef.current.envelope.sustain = envelope.sustain;
    nodeRef.current.envelope.release = envelope.release;
  }, [nodeRef, envelope]);

  useEffect(() => {
    nodeRef.current.oscillator.type = oscillatorType;
  }, [oscillatorType, nodeRef]);

  return (
    <Container>
      <div className={styles.typeSelectorContainer}>
        <OscillatorTypeSelector
          type={oscillatorType}
          onChange={setOscillatorType}
        />
      </div>
      <EnvelopeEditor envelope={envelope} onChange={setEnvelope} />
    </Container>
  );
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
