import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import NodeContainer from '../../common/NodeContainer';
import { useNode } from '../../../hooks/node';
import EnvelopeEditor from '../../common/EnvelopeEditor';
import { useInput } from '../../../hooks/input';

const SynthNode = ({ onClickOutput }) => {
  const nodeRef = useNode(new Tone.Synth(), []);

  useInput(nodeRef);

  const [envelope, setEnvelope] = useState({
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  });

  useEffect(() => {
    nodeRef.current.envelope.attack = envelope.attack;
    nodeRef.current.envelope.decay = envelope.decay;
    nodeRef.current.envelope.sustain = envelope.sustain;
    nodeRef.current.envelope.release = envelope.release;
  }, [nodeRef, envelope]);

  return (
    <NodeContainer title="Synth" onClickOutput={() => onClickOutput(nodeRef.current)}>
      <EnvelopeEditor envelope={envelope} onChange={setEnvelope} />
    </NodeContainer>
  );
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
