import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import DraggableBox from '../../common/DraggableBox';
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
    <DraggableBox title="Delay">
      <OutputInput onClick={onClickInput} isInput />
      <OutputInput onClick={() => onClickOutput(nodeRef.current)} />
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
    </DraggableBox>
  );
};

export default DelayNode;
