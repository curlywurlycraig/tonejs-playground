import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import DraggableBox from '../../common/DraggableBox';
import OutputInput from '../../common/OutputInput';
import Slider from '../../common/Slider';

const TremoloNode = ({ inputs, onClickInput, onClickOutput }) => {
  const [frequency, setFrequency] = useState(10);
  const [depth, setDepth] = useState(1);

  const nodeRef = useNode(new Tone.Tremolo(frequency, depth).start(), inputs);

  useEffect(() => {
    nodeRef.current.frequency.value = frequency;
    nodeRef.current.depth.value = depth;
    console.log("frequency is ", frequency);
    console.log("depth is ", depth);
  }, [nodeRef, frequency, depth]);

  return <DraggableBox title="Tremolo">
    <OutputInput onClick={onClickInput} isInput />
    <OutputInput onClick={() => onClickOutput(nodeRef.current)} />
    <Slider min={1} max={10} value={frequency} onChange={e => setFrequency(e.target.value)} label="Frequency" />
    <Slider min={0.1} max={1} step={0.1} value={depth} onChange={e => setDepth(e.target.value)} label="Depth" />
  </DraggableBox>
};

export default TremoloNode;