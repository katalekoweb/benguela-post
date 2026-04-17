import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()


  return (
    <div>
      <h2>Opps</h2>
      <p>Something is wrong!!</p>
      <p>
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage
