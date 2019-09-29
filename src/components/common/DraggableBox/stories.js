import React from 'react';
import { storiesOf } from '@storybook/react';
import DraggableBox from './index';

storiesOf('common/DraggableBox', module)
  .add('default', () => (
    <DraggableBox initialXPos={10} initialYPos={10}>
      <p>Example content</p>
    </DraggableBox>
  ))
  .add('with title', () => (
    <DraggableBox initialXPos={10} initialYPos={10} title="Example title">
      <p>Example content</p>
    </DraggableBox>
  ));
