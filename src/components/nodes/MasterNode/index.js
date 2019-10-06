import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { useNode } from '../../../hooks/node';
import Checkbox from '../../common/Checkbox';
import Slider from '../../common/Slider';

const MasterNode = nodeProps => {
  const [volume, setVolume] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [nodeRef, Container] = useNode(Tone.Master, nodeProps);

  useEffect(() => {
    nodeRef.current.volume.value = volume;
    nodeRef.current.mute = isMuted;
  }, [volume, isMuted, nodeRef]);

  return (
    <Container>
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
    </Container>
  );
};

MasterNode.defaultProps = {
  inputs: []
};

export default MasterNode;
