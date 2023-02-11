import React from 'react'
import Navigation from '../Navigation'

export default function Layouts({children}) {
  return (
    <>
      <Navigation />
        {children}

    </>
  )
}
