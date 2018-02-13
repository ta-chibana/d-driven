import * as functions from 'firebase-functions';
import vision from '@google-cloud/vision';

export const subscribeImageUpload = functions.storage.object().onChange(event => {
  const object = event.data;
  const client = new vision.ImageAnnotatorClient();
  const request = {
    image: {
      source: {
        imageUri: `gs://${object.bucket}/${object.name}`
      }
    }
  };

  console.log(`*** ${request.image.source.imageUri} ***`);

  client.textDetection(request).then(response => {
    console.log('*** results ***');
    const detections = response[0].textAnnotations;
    for (const text of detections) {
      console.log(text.description);
    }
    console.log('***************');
  }).catch(error => {
    console.error('*** error occurred ***');
    console.error(error);
  })
})
