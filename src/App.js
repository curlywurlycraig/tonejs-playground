import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/common/Toolbar';
import Nodes from './components/nodes/Nodes';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useState([]);

  const addNode = node => {
    setNodes([
      ...nodes,
      node
    ])
  };

  const connectSelectedNodeToNode = node => {
    if (selectedNode === null) {
      return;
    }

    console.log('connecting selected node to node')

    setNodes(nodes.map(iterNode => {
      if (iterNode === node) {
        return {
          ...iterNode,
          inputs: [...iterNode.inputs, selectedNode]
        };
      } else {
        return iterNode
      }
    }));

    // setSelectedNode(null);
  };

  const onNodeMoved = ({ node, x, y }) => {
    console.log('node ', node, 'moved to ', x, y);
  };

  return (
    <div className="App">
      <Toolbar onAddNode={addNode} />
      <Nodes nodes={nodes} onNodeInputClicked={connectSelectedNodeToNode} onNodeOutputClicked={setSelectedNode} onNodeMoved={onNodeMoved} />
      {/*<svg viewBox></svg>*/}
    </div>
  );
}

export default App;
