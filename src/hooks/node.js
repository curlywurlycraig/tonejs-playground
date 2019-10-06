import { useEffect, useRef, useState } from 'react';

export const useNode = (tone, { inputs, onToneRefChanged }) => {
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

  return toneRef;
};
