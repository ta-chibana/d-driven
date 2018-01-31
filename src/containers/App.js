import React from 'react'
import { connect } from 'react-redux'
import App from 'components/App'
import actions from 'actions'

const mapDispatchToProps = dispatch => {
  return {
    onChangeImage: encodedFile => {
      console.log(encodedFile)
      dispatch(actions.encodeSuccess(encodedFile))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
