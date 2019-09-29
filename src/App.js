import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/common/Toolbar';

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
    console.log('collecting ', selectedNode, ' to ', node);
    if (selectedNode === null) {
      return;
    }

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

    setSelectedNode(null);
  };

  const renderNodes = () => {
    return nodes.map(node => node.render({
      inputs: node.inputs,
      onClickInput: tone => connectSelectedNodeToNode(node),
      onClickOutput: tone => { console.log('setting selected node ', tone); setSelectedNode(tone) },
      xPos: node.xPos,
      yPos: node.yPos
    }))
  };

  return (
    <div className="App">
      <Toolbar onAddNode={addNode} />
      { renderNodes() }
      {/*<svg viewBox></svg>*/}
    </div>
  );
}

export default App;
