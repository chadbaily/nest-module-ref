# Nest ModuleRef Demonstration

## About

- Upgrading from `v7.6.15` to `v8.x.x` breaks the module reference
- I have noticed that it is necessary to delete both `node_modules` and the `package-lock.json` when switching between branches

## Branches

- `main` this is the working code for `v7.6.15`. The module reference works as expected and the dependencies within each module are properly resolved.
- `v8` this is the broken code for `v8.0.5`. THe module reference is not working as expected and the dependencies are unresolved.

## Starting the app

You will need `docker` installed and working in order to stand up this repository

- Install the dependencies
  - `npm i`
- Start the compose file
  - `docker-compose up`
- Launch the NestJs app
  - `npm run start:dev`
  - There is swagger documentation located at [http://localhost:3000/api](http://localhost:3000/api) so you can easily explore the app

## How to Reproduce the Issue

- Start on `main` branch
  - Follow the [starting the app](#starting-the-app) instructions
  - The app will start and you will be able to view the docs
- Stop the application
  - `ctrl + c`
- Stop docker
  - `docker-compose down`
- Delete `node_modules` and `package-lock.json`
- Checkout `v8`
  - `git checkout v8`
- Follow the [starting the app](#starting-the-app) instructions
  - The app will not start