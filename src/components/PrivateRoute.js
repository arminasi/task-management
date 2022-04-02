import React from 'react'
import { useBootCampContext } from '../state'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const {state: { isLoggedIn }} = useBootCampContext()
  if(!isLoggedIn) {
    return <Navigate to='login' replace/>
  }
  return children
}

export default PrivateRoute