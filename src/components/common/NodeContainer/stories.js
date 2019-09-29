import React from 'react';
import { storiesOf } from '@storybook/react';
import NodeContainer from './index';

storiesOf('common/NodeContainer', module)
  .add('default', () => (
    <NodeContainer initialXPos={10} initialYPos={10}>
      <p>Example content</p>
    </NodeContainer>
  ))
  .add('with title', () => (
    <NodeContainer initialXPos={10} initialYPos={10} title="Example title">
      <p>Example content</p>
    </NodeContainer>
  ));
