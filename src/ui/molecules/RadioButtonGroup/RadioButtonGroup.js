import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { HBox, VBox, Flex1, FieldContainer } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { RadioButton, FormLabel } from '@ui/molecules'

const InnerContainer = styled.div`
  display: flex;
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
    disabled,
    onPress
  }) => {

    if(!_storyState) _storyState = { value: '' }

    return (
      <FieldContainer>
        <FormLabel>{label}</FormLabel>
        <HBox height={theme.paddings.half} />
        <InnerContainer>
          {options.map(option => (
            <OptionContainer key={option.value} 
              onClick={typeof option.label === 'string' ? () => onPress(option.value) : undefined}
            >
              <RadioButton
                value={option.value}
                checked={option.value === _storyState.value || (_storyState.value === '' && option.value === value)}
                error={error}
                disabled={disabled}
                onPress={typeof option.label === 'string' ? undefined : onPress}
              />
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
      </FieldContainer>
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
  disabled: PropTypes.bool,

  onPress: PropTypes.func.isRequired,
}
