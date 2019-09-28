import React from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';
import OutputInput from '../../common/OutputInput';
import { useNode } from '../../../hooks/node';

const MasterNode = ({inputs, onClickInput}) => {
  const nodeRef = useNode(Tone.Master, inputs);

  return (
    <DraggableBox title="Master">
      <p>Icon would go here.</p>
      <p>So would volume slider.</p>
      <OutputInput onClick={onClickInput} isInput />
    </DraggableBox>
  )
};

MasterNode.defaultProps = {
  inputs: []
};

export default MasterNode;
