import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import NodeContainer from '../../common/NodeContainer';
import OutputInput from '../../common/OutputInput';
import Slider from '../../common/Slider';

const DelayNode = ({ inputs, onClickInput, onClickOutput }) => {
  const [time, setTime] = useState(0.2);
  const [feedback, setFeedback] = useState(0.5);

  const nodeRef = useNode(new Tone.FeedbackDelay(time, feedback), inputs);

  useEffect(() => {
    nodeRef.current.delayTime.value = time;
    nodeRef.current.feedback.value = feedback;
  }, [nodeRef, time, feedback]);

  return (
    <NodeContainer
      title="Delay"
      onClickOutput={() => onClickOutput(nodeRef.current)}
      onClickInput={() => onClickInput(nodeRef.current)}
    >
      <Slider
        min={0.1}
        max={1}
        step={0.05}
        value={time}
        onChange={e => setTime(e.target.value)}
        label="Time"
      />
      <Slider
        min={0.1}
        max={1}
        step={0.1}
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        label="Feedback"
      />
    </NodeContainer>
  );
};

export default DelayNode;
