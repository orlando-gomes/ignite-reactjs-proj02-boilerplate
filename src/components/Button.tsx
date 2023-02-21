import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonVariants } from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      Enviar
    </ButtonContainer>
  )
}
