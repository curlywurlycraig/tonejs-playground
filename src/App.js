import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import './App.css';
import MasterNode from './components/nodes/MasterNode';
import SynthNode from './components/nodes/SynthNode';
import TremoloNode from './components/nodes/TremoloNode';
import DelayNode from './components/nodes/DelayNode';

function App() {
  useEffect(() => {
    Tone.context.lookAhead = 0.005;
  }, []);

  const [selectedNode, setSelectedNode] = useState(null);
  const [masterInputs, setMasterInputs] = useState([]);
  const [tremoloInputs, setTremoloInputs] = useState([]);
  const [delayInputs, setDelayInputs] = useState([]);

  const connectSelectedNodeToInput = () => {
    if (selectedNode === null) {
      return;
    }

    setMasterInputs([...masterInputs, selectedNode]);
    setSelectedNode(null);
  };

  const connectSelectedNodeToTremoloInput = () => {
    if (selectedNode === null) {
      return;
    }

    setTremoloInputs([...tremoloInputs, selectedNode]);
    setSelectedNode(null);
  };

  const connectSelectedNodeToDelayInput = () => {
    if (selectedNode === null) {
      return;
    }

    setDelayInputs([...delayInputs, selectedNode]);
    setSelectedNode(null);
  };

  return (
    <div className="App">
      <SynthNode activeOutputs={[]} onClickOutput={setSelectedNode} />
      <MasterNode inputs={masterInputs} onClickInput={connectSelectedNodeToInput} />
      <TremoloNode inputs={tremoloInputs} onClickInput={connectSelectedNodeToTremoloInput} onClickOutput={setSelectedNode} />
      <DelayNode inputs={delayInputs} onClickInput={connectSelectedNodeToDelayInput} onClickOutput={setSelectedNode} />
      {/*<svg viewBox></svg>*/}
    </div>
  );
}

export default App;
