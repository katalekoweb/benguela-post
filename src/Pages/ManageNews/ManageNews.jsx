import React from 'react'
import { useParams } from 'react-router-dom'

const ManageNews = () => {
    const { action } = useParams()
  return (
    <AddPostContainer>
      <h2> { action } </h2>
    </AddPostContainer>
  )
}

export default ManageNews
