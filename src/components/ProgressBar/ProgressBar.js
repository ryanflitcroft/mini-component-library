import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const Progress = styled.progress`
  &[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 370px;
    height: var(--height);

    &::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      border-radius: var(--border-radius-outer);
      box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
      padding: var(--padding);
    }

    &::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: var(--border-radius-inner);
    }
  }
`

const progressBarStyles = {
  large: { height: '24px', borderRadius: '8px' },
  medium: { height: '12px', borderRadius: '4px' },
  small: { height: '8px', borderRadius: '4px' }
}

const ProgressBar = ({ value = 0, size = 'medium' }) => {
  // Constants
  const BORDER_RADIUS_INNER = 4
  const MAX_VALUE = 100

  // Calculate styles based on size and value
  const stylesHeight =
    progressBarStyles[size]?.height ?? progressBarStyles.medium.height

  const borderRadiusOuter =
    progressBarStyles[size]?.borderRadius ??
    progressBarStyles.medium.borderRadius

  const borderRadiusInner =
    value >= MAX_VALUE
      ? `${BORDER_RADIUS_INNER}px`
      : value < MAX_VALUE - BORDER_RADIUS_INNER
      ? `${BORDER_RADIUS_INNER}px 0 0 ${BORDER_RADIUS_INNER}px`
      : `${BORDER_RADIUS_INNER}px ${
          value - MAX_VALUE + BORDER_RADIUS_INNER
        }px ${
          value - MAX_VALUE + BORDER_RADIUS_INNER
        }px ${BORDER_RADIUS_INNER}px`
        
  const padding = size === 'large' ? `${BORDER_RADIUS_INNER}px` : '0'

  // JSX rendering
  return (
    <>
      <Progress
        max='100'
        value={value}
        style={{
          '--height': stylesHeight,
          '--border-radius-outer': borderRadiusOuter,
          '--border-radius-inner': borderRadiusInner,
          '--padding': padding
        }}
      >
        <VisuallyHidden>Progress is {value}%</VisuallyHidden>
      </Progress>
    </>
  )
}

export default ProgressBar
