import { connect } from 'react-redux'
import App from '../components/App'
import actions from '../actions'

const mapDispatchToProps = dispatch => ({
  onChangeImage: (image) => {
    dispatch(actions.uploadImage(image))
  }
})

export default connect(null, mapDispatchToProps)(App)
