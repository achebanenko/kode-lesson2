import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { HBox, VBox, Flex1 } from '@ui/atoms'
import { Body2, InputError, InputTip } from '@ui/atoms/Typography'
import { RadioButton, FormLabel } from '@ui/molecules'

const Container = styled.div`
  min-height: 88px;
  padding-bottom: ${({theme}) => theme.paddings.main}px;
  display: flex;
  flex-direction: column;
`

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RadioButtonGroup = withTheme(
  ({
    theme,
    _storyState,
    name,
    label,
    value,
    options,
    error,
    tip,
    disabled,
    onPress
  }) => {

    if(!_storyState) _storyState = { value: '' }

    return (
      <Container>
        <FormLabel>{label}</FormLabel>
        <HBox height={theme.paddings.half} />
        <InnerContainer>
          {options.map(option => (
            <OptionContainer key={option.value}>
              <div onClick={typeof option.label === 'string' ? () => onPress(option.value) : undefined}>
                <RadioButton 
                  name={name}
                  value={option.value}
                  checked={(option.value === value && _storyState.value === '') || option.value === _storyState.value}
                  error={error}
                  disabled={disabled}
                  onPress={typeof option.label === 'string' ? undefined : onPress}
                />
              </div>
              <VBox width={12} />
              {typeof option.label === 'string' ? (
                <Flex1>
                  <Body2>{option.label}</Body2>
                </Flex1>
              ) : (
                option.label
              )}
              <VBox width={30} />
            </OptionContainer>
          ))}
        </InnerContainer>
        <HBox height={theme.paddings.half} />
        {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
      </Container>
    )
  }
)

RadioButtonGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  error: PropTypes.string,
  tip: PropTypes.string,
  disabled: PropTypes.bool,

  onPress: PropTypes.func.isRequired,
}
