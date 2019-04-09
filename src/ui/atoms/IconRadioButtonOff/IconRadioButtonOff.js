import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@ui/theme'

export const IconRadioButtonOff = withTheme(({ color, theme }) => (
  <svg width={24} height={24} fill="none">
    <circle cx={12} cy={12} r={9.5} 
      stroke={color ? color : theme.pallete.gainsboro}
    />
  </svg>
))

IconRadioButtonOff.propTypes = {
  color: PropTypes.string,
}