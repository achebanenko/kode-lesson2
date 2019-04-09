import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioButton } from './RadioButton'

storiesOf('ui/molecules', module).add('RadioButton', () => (
  <RadioButton 
    value={text('value', 'some')}
    checked={boolean('checked', false)}
    error={text('error', '')}
    disabled={boolean('disabled', false)}
    onPress={action('onPress')}
  />
))
