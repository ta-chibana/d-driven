import * as functions from 'firebase-functions';
import detectText from './detectText';

export const subscribeImageUpload = functions.storage.object().onChange(event => {
  const texts = detectText(event.data);

  for (const text of texts) {
    console.log(text);
  }
});
