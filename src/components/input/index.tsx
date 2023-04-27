import React, {
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { InputContainer, Container, LabelText } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: any
  label?: string
  filledColor?: string
  type?: string
  variant?: 'primary' | 'ghost' | 'representantes'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  mask?: string
}

const InputComponent = ({
  name,
  label,
  filledColor,
  type = 'text',
  variant = 'primary',
  icon: Icon,
  onChange,
  mask,
  ...rest
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(false)

    if (inputRef.current?.value !== '') {
      setIsFilled(true)
    }
  }, [])

  return (
    <Container>
      {label && <LabelText>{label}</LabelText>}
      <InputContainer
        variant={variant}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <input
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlurCapture={handleInputBlur}
          ref={inputRef}
          onChange={onChange}
          {...rest}
        />
      </InputContainer>
    </Container>
  )
}

export default InputComponent
