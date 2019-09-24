import React, { useEffect, useRef } from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';

const SynthNode = ({ activeOutputs, onClickOutput }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    nodeRef.current = new Tone.Synth();

    setInterval(() => {
      nodeRef.current.triggerAttackRelease("C4", "8n");
    }, 2000);
  }, []);

  return (
    <DraggableBox title="Master">
      <p>Synth controls go here.</p>
      <button onClick={() => onClickOutput(nodeRef.current)}>O</button>
    </DraggableBox>
  )
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
