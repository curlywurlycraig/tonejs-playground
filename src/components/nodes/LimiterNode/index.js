import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import NodeContainer from '../../common/NodeContainer';
import Slider from '../../common/Slider';

const LimiterNode = ({ inputs, onClickInput, onClickOutput }) => {
  const [threshold, setThreshold] = useState(-6);
  const nodeRef = useNode(new Tone.Limiter(threshold), inputs);

  useEffect(() => {
    nodeRef.current.threshold.value = threshold;
  }, [threshold, nodeRef]);

  return (
    <NodeContainer
      title="Limiter"
      onClickInput={() => onClickInput(nodeRef.current)}
      onClickOutput={() => onClickOutput(nodeRef.current)}
    >
      <Slider
        min={-12}
        max={0}
        step={0.1}
        onChange={e => setThreshold(e.target.value)}
      />
    </NodeContainer>
  );
};

export default LimiterNode;
