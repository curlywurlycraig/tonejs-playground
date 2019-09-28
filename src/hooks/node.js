import { useEffect, useRef, useState } from 'react';

export const useNode = (node, inputs) => {
  const [currentInputs, setCurrentInputs] = useState([]);
  const nodeRef = useRef(node);

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

  return nodeRef;
};
