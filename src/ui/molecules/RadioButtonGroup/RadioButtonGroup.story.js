import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioButtonGroup } from './RadioButtonGroup'
import { text, boolean, object, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add('RadioButtonGroup', 
  withState({ result: '' })(({ store }) => {
    return (
      <RadioButtonGroup
        options={object('options', {'муж.': 'male', 'жен.': 'female'})}
        default={radios('default', {'male': 'male', 'female': 'female'})}
        error={text('error', '')}
        disabled={boolean('disabled', false)}

        onPress={ value => {
          store.set({ result: value })
          action('onPress')(value)
        }}
        _state={object('_state', { result: store.state.result} )}
      />
    )
  })
)
