import { createActions } from 'redux-actions'

const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

export default createActions({
  [UPLOAD_IMAGE]: image => ({ image })
})
