import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@ui/theme'

export const IconRadioButtonOn = withTheme(({ color, theme }) => (
  <svg width={24} height={24} fill="none">
    <circle cx={12} cy={12} r={10} 
      fill={color ? color : theme.pallete.radicalRed}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 15.5L6 12l-1.167 1.167L9.5 17.833l10-10-1.167-1.166L9.5 15.5z"
      fill="#fff"
    />
  </svg>
))

IconRadioButtonOn.propTypes = {
  color: PropTypes.color,
}
