import React, { useEffect, useRef, useState } from 'react';
import NodeContainer from '../components/common/NodeContainer';

export const useNode = (tone, { inputs, onToneRefChanged, title, onClickOutput, onClickInput }) => {
  const [currentInputs, setCurrentInputs] = useState([]);
  const toneRef = useRef(tone);

  useEffect(() => {
    const newInputs = inputs.filter(input => !currentInputs.includes(input));
    const removedInputs = currentInputs.filter(
      input => !inputs.includes(input)
    );
    const intersectInputs = currentInputs.filter(input =>
      inputs.includes(input)
    );

    if (newInputs.length || removedInputs.length) {
      newInputs.forEach(newInput => {
        newInput.toneRef.current.connect(toneRef.current);
      });

      removedInputs.forEach(removedInput => {
        removedInput.toneRef.current.disconnect(toneRef.current);
      });

      setCurrentInputs([...intersectInputs, ...newInputs]);
    }
  }, [inputs, currentInputs, toneRef]);

  useEffect(() => {
    onToneRefChanged(toneRef)
  }, [onToneRefChanged, toneRef]);

  // Basically I want to avoid re-rendering the entire component tree every time a node is dragged a little bit.
  // A good way to do this would be to store node positions in a context, to avoid triggering renders.
  // Another possible way is to use React.memo. I need to decide this!
  const Container = ({ children }) => (
    <NodeContainer
      title={title}
      onClickOutput={() => onClickOutput(toneRef.current)}
      onClickInput={() => onClickInput(toneRef.current)}
    >
      { children }
    </NodeContainer>
  );

  useEffect(() => {
    setContainer({ container: Container });
  }, [onClickInput, onClickOutput, title]);

  const [container, setContainer] = useState({ container: Container });

  return [toneRef, container.container];
};
