import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, Spinner } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'link' | 'cancel' | 'alternative'
  backgroundColor: string;
  isLoading?: boolean;
}

const Button = ({
  variant = 'primary',
  isLoading = false,
  children,
  backgroundColor,
  ...rest
}: Props): JSX.Element => {
  return (
    <ButtonContainer backgroundColor={backgroundColor} variant={variant} {...rest}>
      {isLoading ? <Spinner /> : children}
    </ButtonContainer>
  )
}

export default Button
