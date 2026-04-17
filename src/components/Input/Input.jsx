import React from 'react'
import { InputSpace } from './InputStyled'

const Input = ({type, placeholder, name, register}) => {
  return (
    <InputSpace type={type} placeholder={placeholder} {...register(name)} />
  )
}

export default Input
