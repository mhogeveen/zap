import { UPDATE_LOGGED_IN } from '../actions/types'

export default (state = false, action) => {
   switch (action.type) {
      case UPDATE_LOGGED_IN:
         return !state
      default:
         return state
   }
}
