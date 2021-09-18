/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const projectId = 'image-prediction-326402';
const location = 'us-central1';
const datasetId = 'ICN9196302610334744576';
const path = 'gs://image-prediction-326402-vcm/csv/all_data.csv';

// Imports the Google Cloud AutoML library
const {AutoMlClient} = require('@google-cloud/automl').v1;

// Instantiates a client
const client = new AutoMlClient();

async function importDataset() {
  // Construct request
  const request = {
    name: client.datasetPath(projectId, location, datasetId),
    inputConfig: {
      gcsSource: {
        inputUris: path.split(','),
      },
    },
  };

  // Import dataset
  console.log('Proccessing import');
  const [operation] = await client.importData(request);

  // Wait for operation to complete.
  // const [response, error] = await operation.promise();
  // console.log(`Dataset imported: ${response}`);

  // test
  operation.promise()
    .then(response => {
      console.log(`SUCCESS: Dataset imported: ${response}`);
    })
    .catch(error => {
      console.log("ERROR .. ", error);
    })
}

importDataset();