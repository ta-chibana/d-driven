import vision from '@google-cloud/vision';

export default (object) => {
  const client = new vision.ImageAnnotatorClient();
  const params = {
    image: {
      source: {
        imageUri: `gs://${object.bucket}/${object.name}`
      }
    }
  };

  console.log(`*** ${params.image.source.imageUri} ***`);

  return client.textDetection(params).then(response => {
    console.log('*** results ***');
    return response[0].textAnnotations.map(text => text.description);
  }).catch(error => {
    console.error('*** error occurred ***');
    console.error(error);
  });
};
