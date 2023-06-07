<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable</p>

# BaseAPI

## Environment Variables
1. Clone the .env.template file and rename it to env.
2. Change environment variables.

## Lift the database
```bash
$ docker-compose up -d
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Production Build

1. Create .env.prod.
2. Set environment variables.
3. Create new Docker image.

``` bash
  $ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
````
