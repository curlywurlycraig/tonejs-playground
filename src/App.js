import React, { useState } from 'react';
import './App.css';
import MasterNode from './components/nodes/MasterNode';
import SynthNode from './components/nodes/SynthNode';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [masterInputs, setMasterInputs] = useState([]);

  const connectSelectedNodeToInput = () => {
    setMasterInputs([...masterInputs, selectedNode]);
    setSelectedNode(null);
  };

  return (
    <div className="App">
      <SynthNode activeOutputs={[]} onClickOutput={setSelectedNode} />
      <MasterNode inputs={masterInputs} onClickInput={connectSelectedNodeToInput} />
    </div>
  );
}

export default App;
