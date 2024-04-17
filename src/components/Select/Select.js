import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  const Wrapper = styled.div`
    position: relative;
    width: max-content;
  `

  const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  `

  const PresentationalSelect = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 18px;
    align-items: center;
    height: ${43 / 16}rem;
    border-radius: 8px;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-size: ${16 / 16}rem;
    line-height: ${18.75 / 16}rem;
    padding: 12px 16px;
    transition: color 0.25s ease-in-out;

    ${NativeSelect}:focus + & {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
      color: ${COLORS.black};
    }
  `

  const IconWrapper = styled.div`
    display: inline-block;
  `

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down' strokeWidth={2} size={24} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  )
}

export default Select
