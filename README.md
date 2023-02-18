# hmp-lambda

# AWS SES Email Sending

This repository contains an AWS Lambda function that sends an email using Amazon SES. The code is written in Node.js and uses the `aws-sdk` library. The main function of this Lambda is to receive form data from a Contact Us page through a POST request.

## Installation

To use this code, you will need to have an AWS account and set up Amazon SES. You will also need to have the AWS CLI installed on your local machine.

1. Clone the repository to your local machine.
2. Navigate to the root directory of the repository.
3. Run `npm install` to install the required dependencies.
4. Deploy the code to AWS Lambda using the AWS CLI.

## Usage

Once the code is deployed to AWS Lambda, you can trigger the function by sending an HTTP POST request to the Lambda function endpoint with the following parameters:

- `name`: The name of the person sending the email.
- `email`: The email address of the person sending the email.
- `message`: The message to include in the email.

You can trigger the function however you wish eg. API Gateway. Once triggered, the Lambda function will use the `aws-sdk` library to send an email using Amazon SES.

## Configuration

Before deploying the code, you will need to configure the following settings:

- `region`: The AWS region to use for SES.
- `emailParams`: The parameters for the email, including the sender email address, recipient email address, subject, and body.

You can modify these settings in the `index.js` file.

## License

This code is licensed under the MIT License. See the LICENSE file for details.
