import { handleActions } from 'redux-actions'
import actions from '../actions'

const initialState = {
  encodedImage: null
}

export default handleActions({
  [actions.encodeSuccess]: (state, action) => ({
    ...state,
    encodedImage: action.payload.image
  })
}, initialState)
