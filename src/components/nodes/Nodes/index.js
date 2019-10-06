import React from 'react';

const Nodes = ({ nodes, onNodeInputClicked, onNodeOutputClicked, onNodeMoved }) => {
  return <React.Fragment>
    { nodes.map(node => node.render({
      key: node.id,
      inputs: node.inputs,
      title: node.title,
      onClickInput: () => onNodeInputClicked(node),
      onClickOutput: () => onNodeOutputClicked(node),
      onToneRefChanged: toneRef => node.toneRef = toneRef,
      onMove: () => onNodeMoved({ node, x: 10, y: 10 }),
      xPos: node.xPos,
      yPos: node.yPos
    })) }
  </React.Fragment>
};

export default Nodes;
