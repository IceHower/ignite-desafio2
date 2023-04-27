import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  variant: 'primary' | 'ghost' | 'representantes'
  border?: string
}
export const LabelText = styled.text`
  text-align: left;
  font-size: 14px;
  margin-left: 3px;
  color: #214659;
  font-weight: 600;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`
export const InputContainer = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 5px;
  border: ${(props) => props.border && props.border};
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.variant === 'primary' &&
    css`
      border: 1px solid #b8b8b8;
    `}
  ${(props) =>
    props.variant === 'ghost' &&
    css`
      background-color: white !important;
      border: none !important;
      border-color: transparent;
    `}
  ${(props) =>
    props.variant === 'representantes' &&
    css`
      background-color: white !important;
      border: 1px solid #005b70 !important;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #50cfc9;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      border-color: #50cfc9;
    `}
    
  input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    padding: 0;
    &::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #d1d1d1;
    }
  }
`
