import React from 'react'
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div>
        <h1>About us</h1>
        <p>This is demo site's About Us page</p>
        <Link to="/admin">For admins</Link>
    </div>
  )
}
