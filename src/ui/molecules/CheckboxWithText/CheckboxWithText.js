import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox, Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { CheckboxField } from '@ui/molecules'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    color: ${({theme}) => theme.pallete.radicalRed};
    text-decoration: none;
  }
`

export const CheckboxWithText = ({
  name,
  children,
  value,
  onPress,
  error,
  disabled,
}) => (
  <Container>
    <div onClick={disabled ? undefined : () => onPress(value)}>
      <CheckboxField
        name={name} 
        value={value}
        error={error}
        disabled={disabled}
        onPress={disabled ? onPress : undefined}
      />
    </div>
    <VBox />
    {typeof children === 'string' ? (
      <Flex1>
        <Body2>{children}</Body2>
      </Flex1>
    ) : (
      <Body2>{children}</Body2>
    )}
  </Container>
)

CheckboxWithText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  children: PropTypes.node,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}
