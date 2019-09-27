import React, { useEffect, useRef } from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';
import OutputInput from '../../common/OutputInput';

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
      <OutputInput onClick={() => onClickOutput(nodeRef.current)}/>
    </DraggableBox>
  )
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
