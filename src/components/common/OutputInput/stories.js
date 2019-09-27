import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OutputInput from './index';

storiesOf('common/OutputInput', module)
  .add('in use', () => <OutputInput isInUse onClick={action('Clicked')}/>);
