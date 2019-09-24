import React from 'react';
import DraggableBox from '../../common/DraggableBox';

const SynthNode = ({ activeOutputs, onStartOutputDrag }) => {
  return (
    <DraggableBox title="Master">
      <p>Synth controls go here.</p>
    </DraggableBox>
  )
};

SynthNode.defaultProps = {
  activeOutputs: []
};

export default SynthNode;
