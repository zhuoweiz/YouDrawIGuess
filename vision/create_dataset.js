/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const projectId = 'image-prediction-326402';
const location = 'us-central1';
const displayName = 'Flowers';

// Imports the Google Cloud AutoML library
const {AutoMlClient} = require('@google-cloud/automl').v1;

// Instantiates a client
const client = new AutoMlClient();

async function createDataset() {
  // Construct request
  // Specify the classification type
  // Types:
  // MultiLabel: Multiple labels are allowed for one example.
  // MultiClass: At most one label is allowed per example.
  const request = {
    parent: client.locationPath(projectId, location),
    dataset: {
      displayName: displayName,
      imageClassificationDatasetMetadata: {
        classificationType: 'MULTICLASS',
      },
    },
  };

  // Create dataset
  const [operation] = await client.createDataset(request);

  // Wait for operation to complete.
  const [response] = await operation.promise();

  console.log("responese: ", response);

  // console.log(`Dataset name: ${response.name}`);
  // console.log(`
  //   Dataset id: ${
  //     response.name
  //       .split('/')
  //       [response.name.split('/').length - 1].split('\n')[0]
  //   }`);
}

createDataset();




