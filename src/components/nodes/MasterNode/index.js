import React, { useEffect, useRef, useState } from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';

const MasterNode = ({inputs, onClickInput}) => {
  const [currentInputs, setCurrentInputs] = useState([]);
  const nodeRef = useRef(null);

  useEffect(() => {
    nodeRef.current = Tone.Master;
  }, [nodeRef]);

  useEffect(() => {
    const newInputs = inputs.filter(input => !currentInputs.includes(input));
    const removedInputs = currentInputs.filter(input => !inputs.includes(input));
    const intersectInputs = currentInputs.filter(input => inputs.includes(input));

    if (newInputs.length || removedInputs.length) {
      newInputs.forEach(newInput => {
        newInput.connect(nodeRef.current);
      });

      removedInputs.forEach(removedInput => {
        removedInput.disconnect(nodeRef.current);
      });

      setCurrentInputs([...intersectInputs, ...newInputs]);
    }
  }, [inputs, currentInputs, nodeRef]);

  return (
    <DraggableBox title="Master">
      <p>Icon would go here.</p>
      <p>So would volume slider.</p>
      <button onClick={onClickInput}>o</button>
    </DraggableBox>
  )
};

MasterNode.defaultProps = {
  inputs: []
};

export default MasterNode;
