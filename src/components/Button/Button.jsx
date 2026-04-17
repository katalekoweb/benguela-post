import React from 'react'
import { ButtonSpace } from './ButtonStyled'

const Button = ({type, text}) => {
  return (
    <ButtonSpace type={type}>
      {text}
    </ButtonSpace>
  )
}

export default Button
