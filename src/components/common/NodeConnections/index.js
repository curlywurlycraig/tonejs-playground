import React from 'react';

const NodeConnections = ({ edges }) => {
  return <div>
    <svg>
      { edges.map(edge => (
        <line x1={edge.from.x} x2={edge.to.x} y1={edge.from.y} y2={edge.to.y} strokeWidth={1} stroke="black" />
      ))}
    </svg>
  </div>
};

export default NodeConnections;
