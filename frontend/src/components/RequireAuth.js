import React from 'react'
import { useAuth } from './AuthProvider'
import { Navigate} from 'react-router-dom';

const RequireAuth = ({children}) => {
  const auth=useAuth();
  if(auth.chk){
    return<Navigate to='/users/register'/>  
  }
  if(!auth.user){
    return<Navigate to='/users/login'/> 
  }

  return (
    children
  )
}

export default RequireAuth
