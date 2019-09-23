import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './index';

storiesOf('common/Box', module)
  .add('default', () => <Box><p>Test content</p></Box>);
