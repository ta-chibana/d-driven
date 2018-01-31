import { handleActions } from 'redux-actions'
import actions from 'actions'

const initialState = {
  encodedFile: null
}

export default handleActions({
  [actions.encodeSuccess]: (state, action) => ({
    ...state,
    encodedFile: action.payload.image
  })
}, initialState)
