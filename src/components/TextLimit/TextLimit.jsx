import React from 'react'

const TextLimit = ({text, limit = 50}) => {
    const textLimited = text.length > limit ? `${text.substring(0,limit)}...` : text
  return (
    <>
      {textLimited}
    </>
  )
}

export default TextLimit
