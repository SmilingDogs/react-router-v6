import React from 'react'
import { useAuth } from '../hooks/useAuth'

export const UserTag = () => {
 const { user } = useAuth();
  return (
    <span>{user ? `Hello, ${user}` : null}</span>
  )
}

