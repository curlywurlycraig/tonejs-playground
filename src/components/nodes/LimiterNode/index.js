import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import Slider from '../../common/Slider';

const LimiterNode = (nodeProps) => {
  const [threshold, setThreshold] = useState(-12);
  const [nodeRef, Container] = useNode(new Tone.Limiter(threshold), nodeProps);

  useEffect(() => {
    nodeRef.current.threshold.value = threshold;
  }, [threshold, nodeRef]);

  return (
    <Container>
      <Slider
        min={-12}
        max={0}
        step={0.1}
        value={threshold}
        onChange={e => setThreshold(e.target.value)}
      />
    </Container>
  );
};

export default LimiterNode;
