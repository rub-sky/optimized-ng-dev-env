# Optimized Angular Development Environment

This repository demos how to set up a local development environment that can run both isolated from backend service calls and also integrated with backend service calls.

## Development server

### Local Development Mode
This mode runs the application isolated from external dependencies and all calls are mocked out.

```npm run start-dev```

Navigate to http://localhost:4200

### Integrated Mode
This mode integrates the service to the external resources, making calls to the backend to get data.

```npm run start-dev-int```

Navigate to http://localhost:4200

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Adding Services
In addition to creating any new services, the following must be completed as well.
* Create an abstract service class
* Copy the service to create a mock that implements the abstract class
* Update the provider files for production and mock development to include the services

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Additional Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.
