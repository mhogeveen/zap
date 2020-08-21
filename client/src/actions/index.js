import { UPDATE_LOGGED_IN } from './types'
import axios from 'axios'

export const updateLoggedIn = () => async (dispatch) => {
   // return {
   //    type: UPDATE_LOGGED_IN,
   // }

   dispatch({
      type: UPDATE_LOGGED_IN,
   })
}
