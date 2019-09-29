import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Slider from './index';

storiesOf('common/Slider', module)
  .add('default', () => <Slider label='Example label' min={0} max={10} onChange={action('Changed value')} />);
