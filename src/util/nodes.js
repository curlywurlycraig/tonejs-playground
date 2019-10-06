import React from 'react';
import MasterNode from '../components/nodes/MasterNode';
import SynthNode from '../components/nodes/SynthNode';
import DelayNode from '../components/nodes/DelayNode';
import LimiterNode from '../components/nodes/LimiterNode';

const createNode = (xPos, yPos, renderFunction) => {
  return {
    xPos,
    yPos,
    inputs: [],
    render: renderFunction,
    toneRef: null,
  };
};

export const createMasterNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    props => (
      <MasterNode {...props} />
    )
  );
};

export const createSynthNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    props => (
      <SynthNode {...props} />
    )
  );
};

export const createDelayNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    props => (
      <DelayNode {...props} />
    )
  );
};

export const createLimiterNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    props => (
      <LimiterNode {...props} />
    )
  );
};
