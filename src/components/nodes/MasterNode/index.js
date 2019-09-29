import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import DraggableBox from '../../common/DraggableBox';
import OutputInput from '../../common/OutputInput';
import { useNode } from '../../../hooks/node';
import Checkbox from '../../common/Checkbox';
import Slider from '../../common/Slider';

const MasterNode = ({ inputs, onClickInput }) => {
  const [volume, setVolume] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const nodeRef = useNode(Tone.Master, inputs);

  useEffect(() => {
    nodeRef.current.volume.value = volume;
    nodeRef.current.mute = isMuted;
  }, [volume, isMuted, nodeRef]);

  return (
    <DraggableBox title="Master">
      <Checkbox
        checked={isMuted}
        onChange={() => setIsMuted(!isMuted)}
        label="Muted"
      />
      <Slider
        value={volume}
        min={-30}
        max={0}
        onChange={e => setVolume(e.target.value)}
        label="Volume"
      />
      <OutputInput onClick={() => onClickInput(nodeRef.current)} isInput />
    </DraggableBox>
  );
};

MasterNode.defaultProps = {
  inputs: []
};

export default MasterNode;
