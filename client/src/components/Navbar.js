import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import LoginButton from './LoginButton'
import ProfileMenu from './ProfileMenu'

const Navbar = () => {
   const { isAuthenticated } = useAuth0()

   return (
      <nav className='navbar'>
         <svg
            className='navbar__logo'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            viewBox='0 0 511.999 511.999'
         >
            <path d='M362.676,192H293.77l78.656-177.067c2.356-5.399-0.11-11.686-5.509-14.043  c-1.338-0.584-2.781-0.887-4.24-0.89H149.343c-5.891-0.018-10.681,4.743-10.699,10.634c-0.001,0.289,0.01,0.577,0.032,0.865  l21.333,277.333c0.435,5.564,5.086,9.852,10.667,9.835H203.7L224.074,502.4c0.59,5.861,5.82,10.135,11.682,9.544  c3.86-0.389,7.205-2.843,8.734-6.408l128-298.667c2.321-5.415-0.187-11.685-5.601-14.006  C365.557,192.292,364.124,191.999,362.676,192z' />
         </svg>
         <ul className='navbar__menu'>
            <Link to='/dashboard' className='navbar__menu-item'>
               Dashboard
            </Link>
            <Link to='/projects' className='navbar__menu-item'>
               Projects
            </Link>
            <Link to='/labels' className='navbar__menu-item'>
               Labels
            </Link>
         </ul>
         {isAuthenticated ? <ProfileMenu /> : <LoginButton />}
      </nav>
   )
}

export default Navbar
