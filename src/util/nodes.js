import React from 'react';
import MasterNode from '../components/nodes/MasterNode';
import SynthNode from '../components/nodes/SynthNode';
import DelayNode from '../components/nodes/DelayNode';

const createNode = (xPos, yPos, renderFunction) => {
  return {
    xPos,
    yPos,
    inputs: [],
    render: renderFunction,
  };
};

export const createMasterNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    ({ inputs, onClickInput, onClickOutput, xPos, yPos }) => (
      <MasterNode inputs={inputs} onClickInput={onClickInput} />
    )
  );
};

export const createSynthNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    ({ inputs, onClickInput, onClickOutput, xPos, yPos }) => (
      <SynthNode onClickOutput={onClickOutput} />
    )
  );
};

export const createDelayNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    ({ inputs, onClickInput, onClickOutput, xPos, yPos }) => (
      <DelayNode inputs={inputs} onClickInput={onClickInput} onClickOutput={onClickOutput} />
    )
  );
};
