import React from 'react';
import './App.css';
import MasterNode from './components/nodes/MasterNode';
import SynthNode from './components/nodes/SynthNode';

function App() {
  return (
    <div className="App">
      <SynthNode activeOutputs={[]} onStartOutputDrag={e => console.log('starting output drag', e.clientX)} />
      <MasterNode inputs={[]} />
    </div>
  );
}

export default App;
