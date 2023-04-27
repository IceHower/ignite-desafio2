import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'link' | 'cancel' | 'alternative'
  backgroundColor: string;
}

const Button = ({
  variant = 'primary',
  children,
  backgroundColor,
  ...rest
}: Props): JSX.Element => {
  return (
    <ButtonContainer backgroundColor={backgroundColor} variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button
