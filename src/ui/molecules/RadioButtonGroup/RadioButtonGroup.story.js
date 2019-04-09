import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioButtonGroup } from './RadioButtonGroup'
import { text, boolean, object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add('RadioButtonGroup', 
  withState({ result: '' })(({ store }) => {

    return (
      <RadioButtonGroup
        error={text('error', '')}
        disabled={boolean('disabled', false)}
        //onPress={action('onPress')}
        onPress={result => {
          store.set({ result })
        }}
        options={object('options', {male: 'муж.', female: 'жен.'})}
        //default={select('default', {null: null, male: 'male', female: 'female'}, null)}

        result={text('result', store.state.result)}
      />
    )
  })
)
