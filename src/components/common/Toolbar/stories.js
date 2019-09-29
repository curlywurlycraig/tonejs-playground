import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toolbar from './index';

storiesOf('common/Toolbar', module)
  .add('default', () => <Toolbar onAddNode={action('Added node')} />);
