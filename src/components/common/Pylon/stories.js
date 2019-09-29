import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pylon from './index';

storiesOf('common/Pylon', module)
  .add('default', () => <Pylon onClick={action('Clicked')} />);
