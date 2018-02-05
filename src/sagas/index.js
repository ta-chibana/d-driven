import { takeLatest, call } from 'redux-saga/effects'
import actions from '../actions'
import { storage } from '../firebase'
import formatDate from '../utils/formatDate'

const imagePath = filename => (
  `images/body-composition/${filename}.jpg`
)

const uploadImage = (image) => {
  const ref = storage.ref()
  const currentDate = formatDate(new Date())
  const imagesRef = ref.child(imagePath(currentDate))
  return imagesRef.put(image)
}

function* requestImageUpload(action) {
  const { image } = action.payload

  yield call(uploadImage, image)
}

export default function* rootSaga() {
  yield takeLatest(actions.uploadImage, requestImageUpload)
}
