from google.cloud import automl

# TODO(developer): Uncomment and set the following variables
project_id = "image-prediction-326402"
dataset_id = "ICN2734200095011504128"
path = "gs://image-prediction-326402-vcm/csv/all_data.csv"

client = automl.AutoMlClient()
# Get the full path of the dataset.
dataset_full_id = client.dataset_path(project_id, "us-central1", dataset_id)
# Get the multiple Google Cloud Storage URIs
input_uris = path.split(",")
gcs_source = automl.GcsSource(input_uris=input_uris)
input_config = automl.InputConfig(gcs_source=gcs_source)
# Import data from the input URI
response = client.import_data(name=dataset_full_id, input_config=input_config)

print("Processing import...")
print("Data imported. {}".format(response.result()))