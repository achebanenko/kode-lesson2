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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RadioButtonGroup = ({
  //result: defaultResult = null,
  result,
  options,
  onPress,
  error,
  disabled,
}) => {

  //const [result, setResult] = React.useState(defaultResult)

  return (
    <Container>
      {Object.entries(options).map(([value, children]) => (
        <InnerContainer key={value} onClick={typeof children === 'string' ? () => onPress(value) : undefined}>
          <RadioButton
            value={value}
            checked={value === result}
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
        </InnerContainer>
      ))}
    </Container>
  )
}

RadioButtonGroup.propTypes = {
  result: PropTypes.string,
  options: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}
