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
    outputs: [],
    render: renderFunction,
    tone: null,
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

export const createLimiterNode = (xPos, yPos) => {
  return createNode(
    xPos,
    yPos,
    ({ inputs, onClickInput, onClickOutput, xPos, yPos }) => (
      <LimiterNode inputs={inputs} onClickInput={onClickInput} onClickOutput={onClickOutput} />
    )
  );
};
