import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './index';

storiesOf('common/Checkbox', module)
  .add('checked and enabled', () => (
    <Checkbox checked={true} onChange={action('Clicked')} />
  ))
  .add('unchecked and enabled', () => (
    <Checkbox checked={false} onChange={action('Clicked')} />
  ))
  .add('checked and disabled', () => (
    <Checkbox checked={true} onChange={action('Clicked')} disabled />
  ))
  .add('unchecked and disabled', () => (
    <Checkbox checked={false} onChange={action('Clicked')} disabled />
  ))
  .add('with label', () => (
    <Checkbox
      checked={true}
      onChange={action('Clicked')}
      label="Example label"
    />
  ))
  .add('disabled with label', () => (
    <Checkbox
      checked={true}
      onChange={action('Clicked')}
      label="Example label"
      disabled
    />
  ));
