import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EnvelopeEditor from './index';
import { ConstrainWidthDecorator } from '../../../storybookDecorators/constrain';


storiesOf('common/EnvelopeEditor', module)
  .addDecorator(ConstrainWidthDecorator)
  .add('default', () => <EnvelopeEditor envelope={{
    attack: 0.001,
    decay: 0.5,
    sustain: 0.5,
    release: 1,
  }} onChange={action('Changed envelope')}/>);
