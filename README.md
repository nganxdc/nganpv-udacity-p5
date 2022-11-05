# Cloud Capstone Project:
Option 2:Best practices.

# All resources in the application are defined in the "serverless.yml" file:
All resources needed by an application are defined in the "serverless.yml". I don't create manually using AWS console.

# Each function has its own set of permissions:
Instead of defining all permissions under provider/iamRoleStatements, permissions are defined per function in the functions section of the "serverless.yml".

# Application has sufficient monitoring:
  - Distributed tracing is enabled.
  - Sufficient amount of log statements.
  - Application level metrics.

# HTTP requests are validated:
Incoming HTTP requests are validated using request validation in API Gateway by serverless-reqvalidator-plugin.

# UI Login page:
I have customized UI of login page from Udacity project 4.