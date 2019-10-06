import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import Slider from '../../common/Slider';

const TremoloNode = nodeProps => {
  const [frequency, setFrequency] = useState(10);
  const [depth, setDepth] = useState(1);

  const [nodeRef, Container] = useNode(new Tone.Tremolo(frequency, depth).start(), nodeProps);

  useEffect(() => {
    nodeRef.current.frequency.value = frequency;
    nodeRef.current.depth.value = depth;
  }, [nodeRef, frequency, depth]);

  return (
    <Container title="Tremolo">
      <Slider
        min={1}
        max={10}
        value={frequency}
        onChange={e => setFrequency(e.target.value)}
        label="Frequency"
      />
      <Slider
        min={0.1}
        max={1}
        step={0.1}
        value={depth}
        onChange={e => setDepth(e.target.value)}
        label="Depth"
      />
    </Container>
  );
};

export default TremoloNode;
