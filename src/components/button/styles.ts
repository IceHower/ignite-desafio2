import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

interface ButtonContainerProps {
  width?: string
  variant: 'primary' | 'ghost' | 'link' | 'cancel' | 'alternative'
  backgroundColor: string
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  ${(props) =>
    props.width &&
    css`
      width: props.width;
    `}
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  ${(props) =>
    (props.variant === 'ghost' || props.variant === 'link') &&
    css`
      color: #718096;
    `}
  ${(props) =>
    (props.variant === 'primary' ||
      props.variant === 'cancel' ||
      props.variant === 'alternative') &&
    css`
      color: white;
    `}
  ${(props) =>
    props.variant === 'ghost' &&
    css`
      border: 1px solid #d9d9d9;
    `}
  transition: filter ease .2s;
  &:hover {
    filter: brightness(0.9);
  }
  &:disabled {
    background-color: #b8b8b8;
    cursor: not-allowed;
  }

  & svg {
    margin-right: 1rem;
  }
`
