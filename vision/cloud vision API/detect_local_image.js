// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = 'C:\Users\Yue Gu\Desktop\images\air\image_0049.jpg';

// Performs label detection on the local file
const [result] = await client.labelDetection(fileName);
const labels = result.labelAnnotations;
console.log('Labels:');
labels.forEach(label => console.log(label.description));