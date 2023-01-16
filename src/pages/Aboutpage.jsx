import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div>
        
        <h1>About us</h1>
        <p>This is demo site About Us page</p>
        <Link to="/admin">For admins</Link>
        <ul>
          <li><Link to='contacts'>Contacts</Link></li>
          <li><Link to='team'>Team</Link></li>
        </ul>
        <Routes>
          <Route path='contacts' element={<p>Our Contacts:</p>}/>
          <Route path='team' element={<p>Our Team</p>}/>
        </Routes>
        
    </div>
  )
}
//* The parent route <Route path="about/*" element={<AboutPage />} /> must have about/* 