# Forge NodeJS Sample App

## Overview
This sample app uses the Forge NodeJS SDK to introduce the [OAuth](https://developer.autodesk.com/en/docs/oauth/v2/overview/) and [Data Management](https://developer.autodesk.com/en/docs/data/v2/overview/) Forge APIs. It shows the following workflow:

* Create a 2-legged authentication token
* Create a bucket (an arbitrary space to store objects)
* Upload a file to the bucket
* Get a list of buckets
* Delete the file

### Requirements
* Node.js version 4 and above.

### Installation

```bash
$ git clone https://github.com/Autodesk-Forge/forge-api-nodejs-client.git
$ cd forge-api-nodejs-client
$ npm install
```

### Create an App

[Create an app](https://developer.autodesk.com/en/docs/oauth/v2/tutorials/create-app/) on the Forge Developer portal, and ensure that you select the Data Management API. Note the client ID and client secret.

### Configure the Parameters

Before running the app you need to configure the following parameters from the *samples/dmSample.js* file:

* Replace `FORGE_CLIENT_ID` and `FORGE_CLIENT_SECRET` with the client ID and client secret generated when creating the app.

* Replace `BUCKET_KEY` with a unique name for the bucket.

* Select a file, and replace `FILE_NAME` and `FILE_PATH` with the filename and file path.

### Run the App
```bash
$ cd samples/
$ node dmSample.js
```


## Support
forge.help@autodesk.com
