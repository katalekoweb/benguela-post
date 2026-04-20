import React, { useState } from 'react'
import { InputSpace, TextSpace } from './InputStyled'

const Input = ({type, placeholder, name, register, isInput = true, value: initialValue}) => {

  const [value, setValue] = useState(initialValue)
  let inputProps = {
    type,
    placeholder,
    ...register(name),
    onChange: (e) => setValue(e.target.value)
  }

  if (value) inputProps.value = value

  return (
    <>
      { isInput ? 
      (<InputSpace {...inputProps} />) 
      : (
        <TextSpace {...inputProps}  />
      )
    }
    </>
  )
}

export default Input
