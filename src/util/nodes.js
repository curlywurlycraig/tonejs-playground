import React from 'react';
import MasterNode from '../components/nodes/MasterNode';
import SynthNode from '../components/nodes/SynthNode';
import DelayNode from '../components/nodes/DelayNode';
import LimiterNode from '../components/nodes/LimiterNode';

const createNode = ({ renderFunction, title }) => {
  return {
    inputs: [],
    render: renderFunction,
    toneRef: null,
    title,
    id: Math.random()
  };
};

export const createMasterNode = () => {
  return createNode({
    renderFunction: props => (
      <MasterNode {...props} />
    ),
    title: 'Master',
  });
};

export const createSynthNode = () => {
  return createNode({
    renderFunction: props => (
      <SynthNode {...props} />
    ),
    title: 'Synth',
  });
};

export const createDelayNode = () => {
  return createNode({
    renderFunction: props => (
      <DelayNode {...props} />
    ),
    title: 'Delay',
  });
};

export const createLimiterNode = () => {
  return createNode({
    renderFunction: props => (
      <LimiterNode {...props} />
    ),
    title: 'Limiter',
  });
};
