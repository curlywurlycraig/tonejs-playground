import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import DraggableBox from '../../common/DraggableBox';
import Slider from '../../common/Slider';
import OutputInput from '../../common/OutputInput';

const LimiterNode = ({ inputs, onClickInput, onClickOutput }) => {
  const [threshold, setThreshold] = useState(-6);
  const nodeRef = useNode(new Tone.Limiter(threshold), inputs);

  useEffect(() => {
    nodeRef.current.threshold.value = threshold;
  }, [threshold, nodeRef]);

  return <DraggableBox title="Limiter">
    <OutputInput onClick={() => onClickInput(nodeRef.current)} isInput />
    <Slider
      min={-12}
      max={0}
      step={0.1}
      onChange={e => setThreshold(e.target.value)}
    />
    <OutputInput onClick={() => onClickOutput(nodeRef.current)} />
  </DraggableBox>
};

export default LimiterNode;
