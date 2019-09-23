import React, { useEffect, useRef, useState } from 'react';
import Tone from 'tone';
import './App.css';
import Slider from './components/common/Slider/input';
import Checkbox from './components/common/Checkbox';
import DraggableBox from './components/common/DraggableBox';
import MasterNode from './components/nodes/MasterNode';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cutoff, setCutoff] = useState(100);
  const [volume, setVolume] = useState(100);
  const [examplePos, setExamplePos] = useState({xPos: 10, yPos: 10});
  const filterRef = useRef(null);
  const masterRef = useRef(null);

  useEffect(() => {
    Tone.Master.mute = true;

    const noiseSynth = new Tone.Noise("pink").start();
    const filter = new Tone.Filter(20000, "lowpass");
    noiseSynth.connect(filter);
    filter.connect(Tone.Master);

    filterRef.current = filter;
    masterRef.current = Tone.Master;
  }, []);

  const updatePlaying = (isPlaying) => {
    masterRef.current.mute = !isPlaying;
    setIsEnabled(isPlaying);
  };

  const updateCutoff = cutoff => {
    filterRef.current.frequency.value = (cutoff / 100) * 20000;
    setCutoff(cutoff);
  };

  const updateVolume = volume => {
    if (volume === 0) {
      masterRef.current.volume.value = -1000;
    }

    masterRef.current.volume.value = 0.5 * volume - 50;


    setVolume(volume);
  };

  return (
    <div className="App">
      <Checkbox label="Play sound" checked={isEnabled} onChange={e => updatePlaying(e.target.checked)} />
      <Slider label="Cutoff" value={cutoff} min={0} max={100} onChange={e => updateCutoff(e.target.value)} />
      <Slider label="Volume" value={volume} min={0} max={100} onChange={e => updateVolume(e.target.value)} />
      <MasterNode inputs={[]} />
    </div>
  );
}

export default App;
