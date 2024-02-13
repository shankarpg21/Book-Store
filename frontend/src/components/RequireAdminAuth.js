import React from 'react'
import { useAuth } from './AuthProvider'
import { Navigate} from 'react-router-dom';

const RequireAdminAuth = ({children}) => {
  const auth=useAuth();
  if(!auth.user){
    return<Navigate to='/admins/login'/> 
  }

  return (
    children
  )
}

export default RequireAdminAuth
