import React, { useEffect, useState } from 'react';
import DraggableBox from '../../common/DraggableBox';

const MasterNode = ({ inputs }) => {
  const [currentInputs, setCurrentInputs] = useState([]);

  useEffect(() => {
    const newInputs = inputs.filter(input => !currentInputs.includes(input));
    const removedInputs = currentInputs.filter(input => !inputs.includes(input));
    const intersectInputs = currentInputs.filter(input => inputs.includes(input));

    if (newInputs.length || removedInputs.length) {
      setCurrentInputs([...intersectInputs, ...newInputs]);
    }
  }, [inputs, currentInputs]);

  return (
    <DraggableBox title="Master">
      <p>Icon would go here.</p>
    </DraggableBox>
  )
};

MasterNode.defaultProps = {
  inputs: []
};

export default MasterNode;
