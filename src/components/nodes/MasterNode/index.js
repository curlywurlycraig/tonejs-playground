import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import NodeContainer from '../../common/NodeContainer';
import { useNode } from '../../../hooks/node';
import Checkbox from '../../common/Checkbox';
import Slider from '../../common/Slider';

const MasterNode = ({ onClickInput, ...nodeProps }) => {
  console.log('node props', nodeProps);
  const [volume, setVolume] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const nodeRef = useNode(Tone.Master, nodeProps);

  useEffect(() => {
    nodeRef.current.volume.value = volume;
    nodeRef.current.mute = isMuted;
  }, [volume, isMuted, nodeRef]);

  return (
    <NodeContainer
      title="Master"
      onClickInput={() => onClickInput(nodeRef.current)}
    >
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
    </NodeContainer>
  );
};

MasterNode.defaultProps = {
  inputs: []
};

export default MasterNode;
