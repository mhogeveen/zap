import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const ProfileMenu = () => {
   const { logout, user } = useAuth0()
   const { picture, name } = user

   return (
      <div className='profile-menu'>
         <div className='profile-info'>
            <p>{name}</p>
            <button
               onClick={() =>
                  logout({
                     returnTo: window.location.origin,
                  })
               }
            >
               Log Out
            </button>
         </div>
         <img src={picture} alt='Profile' className='profile-pic' />
      </div>
   )
}

export default ProfileMenu
