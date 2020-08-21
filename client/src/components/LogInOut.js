import React from 'react'
import { connect } from 'react-redux'
import { updateLoggedIn } from '../actions'

const LogInOut = ({ updateLoggedIn }) => {
   const handleUpdateLoggedIn = () => {
      updateLoggedIn()
   }

   return (
      <>
         <button className='btn btn--github' onClick={handleUpdateLoggedIn}>
            Login with Github
         </button>
      </>
   )
}

const mapStateToProps = (state) => {
   return { loggedIn: state.loggedIn }
}

export default connect(mapStateToProps, { updateLoggedIn })(LogInOut)
