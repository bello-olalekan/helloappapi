# Hello API

This is a test project to evaluate the skills of applicants for the Cloud / DevOps Engineer (AWS) position at GeoGebra.

## Scenario

Our developers have created an API to greet the world. But they made a mistake so the `GET /ouch` endpoint 
returns an internal server error with status 500.

## Task

Please set up a suitable AWS infrastructure to host this API in a scalable manner!
If there are more than 5 internal server errors per minute, the developers should get a notification per email.
The email address should be configurable.

Use [CloudFormation](https://aws.amazon.com/cloudformation/) to specify and configure the needed AWS services!
For deployment, you can use any AWS technology and one of the following scripting languages:
* bash (+awscli)
* JavaScript
* Python
* PHP

Please document the implemented deployment process!

In order to commit your work, create a patch and send it by email to [jobs@geogebra.org](mailto:jobs@geogebra.org)!
You can also create a separate repository and send us a link.

The needed resources should be included in the AWS free tier. If you are not able to test your implementation because of
potential AWS costs, please mention it when you submit the solution!

## Info

The API was implemented using [Node.js 14](https://nodejs.org) and the [Express framework](https://expressjs.com/).
To run it, install the dependencies by running `npm install`, then you can start the server with `npm start`.

The API is protected by HTTP Basic authentication. There is only one user with name `geo` whose password can be 
configured by setting the `PASSWORD` environment variable.
