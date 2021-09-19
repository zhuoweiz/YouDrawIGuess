async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./resources/Capture.png');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
  quickstart();


// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const bucketName = 'image-prediction-326402-vcm';
const fileName = '';

// Performs label detection on the gcs file
const [result] = await client.labelDetection(
  `gs://${bucketName}/${fileName}`
);
const labels = result.labelAnnotations;
console.log('Labels:');
labels.forEach(label => console.log(label.description));