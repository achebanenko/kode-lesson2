import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioButtonGroup } from './RadioButtonGroup'
import { text, boolean, object, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add('RadioButtonGroup', 
  withState({ value: '' })(({ store }) => {
    return (
      <RadioButtonGroup 
        name={text('name','gender')}
        options={object('options', [{value: 'male', label: 'муж.'}, {value: 'female', label: 'жен.'}])}
        value={radios('value', {'male': 'male', 'female': 'female'}, '')}
        error={text('error', '')}
        disabled={boolean('disabled', false)}

        onPress={ value => {
          store.set({ value })
          action('onPress')(value)
        }}
        _storyState={object('_storyState', { value: store.state.value} )}
      />
    )
  })
)
