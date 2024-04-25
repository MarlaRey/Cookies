import React from 'react'
import {Link, Outlet} from "react-router-dom"
import  {CookieBanner}  from '../components/CookieBanner'


export const Layout = () => {
  return (
    <div>
      <nav><ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/about">about</Link></li>
        </ul></nav>
        <Outlet />
      <CookieBanner /> 
      <footer>footer</footer>
    </div>
  )
}


