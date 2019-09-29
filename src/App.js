import React, { useState } from 'react';
import './App.css';
import MasterNode from './components/nodes/MasterNode';
import SynthNode from './components/nodes/SynthNode';
import TremoloNode from './components/nodes/TremoloNode';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [masterInputs, setMasterInputs] = useState([]);
  const [tremoloInputs, setTremoloInputs] = useState([]);

  const connectSelectedNodeToInput = () => {
    if (selectedNode === null) {
      return;
    }

    console.log("connecting to master: ", selectedNode);

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

  return (
    <div className="App">
      <SynthNode activeOutputs={[]} onClickOutput={setSelectedNode} />
      <MasterNode inputs={masterInputs} onClickInput={connectSelectedNodeToInput} />
      <TremoloNode inputs={tremoloInputs} onClickInput={connectSelectedNodeToTremoloInput} onClickOutput={setSelectedNode} />
      {/*<svg viewBox></svg>*/}
    </div>
  );
}

export default App;
