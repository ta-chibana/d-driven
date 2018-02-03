import { connect } from 'react-redux'
import App from 'components/App'
import actions from 'actions'

const mapDispatchToProps = dispatch => ({
  onChangeImage: (encodedImage) => {
    dispatch(actions.encodeSuccess(encodedImage))
  }
})

export default connect(null, mapDispatchToProps)(App)
