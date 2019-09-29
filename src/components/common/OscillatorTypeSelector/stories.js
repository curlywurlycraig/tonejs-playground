import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OscillatorTypeSelector from './index';

storiesOf('common/OscillatorTypeSelector', module)
  .add('sine', () => (
    <OscillatorTypeSelector type="sine" onChange={action('Changed')} />
  ))
  .add('triangle', () => (
    <OscillatorTypeSelector type="triangle" onChange={action('Changed')} />
  ));
