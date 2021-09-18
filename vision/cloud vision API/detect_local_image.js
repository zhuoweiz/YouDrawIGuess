// Imports the Google Cloud client library
async function make_prediction() {    
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = 'C:/Users/Yue Gu/Desktop/images/air/image_0389.jpg';

    // Performs label detection on the local file
    const [result] = await client.labelDetection(fileName);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description, label.score));
    }
    make_prediction();
