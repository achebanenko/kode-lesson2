import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox, Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { RadioButton } from '@ui/molecules'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RadioButtonGroup = ({
  //result: defaultResult = null,
  _state,
  options,
  default: bydefault,
  error,
  disabled,
  onPress
}) => {

  const [result, setResult] = React.useState(bydefault || _state.result)

  return (
    <Container>
      {Object.entries(options).map(([children, value]) => (
        <Container key={value} onClick={typeof children === 'string' ? () => {onPress(value); setResult(value)} : undefined}>
          <RadioButton
            value={value}
            checked={value === _state.result || _state.result === '' && value === bydefault}
            error={error}
            disabled={disabled}
            onPress={typeof children === 'string' ? undefined : onPress}
          />
          <VBox width={12} />
          {typeof children === 'string' ? (
            <Flex1>
              <Body2>{children}</Body2>
            </Flex1>
          ) : (
            children
          )}
          <VBox width={30} />
        </Container>
      ))}
    </Container>
  )
}

RadioButtonGroup.propTypes = {
  options: PropTypes.object.isRequired,
  default: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,

  onPress: PropTypes.func.isRequired,
}
