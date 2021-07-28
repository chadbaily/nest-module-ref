# ITOD Quarterly Meeting Project - July 19 - 23, 2021

## Description

We will be breaking into small teams and creating a NestJS RESTful API for a fictional storefront. This API will allow for the creation and management of products, customers, and orders.

## `DISCLAIMER`

`If using an AWS Playground provisioned for this week, under no circumstance are you to deploy any Virginia529 specific code. In addition, no specific implementations, packages, etc. that are deployed to the AWS Playground will be able to be used in future Virginia529 work. Keep the implementation of the goals generic and do not use code from our repositories to assist in accomplishing the goals.`

## Learning Objectives

### Primary - Create a NestJS RESTful API

1. Create CRUD operations for required resources following the [Microsoft guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md)
2. Document the API using [Swagger/OpenAPI](https://docs.nestjs.com/openapi/introduction)
3. Write Jest [unit tests](https://docs.nestjs.com/fundamentals/testing) for Controllers and Services
4. Implement a [Validation Pipe](https://docs.nestjs.com/techniques/validation)

### Stretch Goals

- Implement Dependency Inversion to abstract CRUD functionality
- Deploy the application with a pipeline using AWS Copilot
  - Please see our [team documentation](https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.wiki/tab::21efb91e-923b-4aaf-8208-3923c0737650?context=%7B%22subEntityId%22%3A%22%7B%5C%22pageId%5C%22%3A72%2C%5C%22origin%5C%22%3A2%7D%22%2C%22channelId%22%3A%2219%3A94626ca337564c858a35d99190ab1328%40thread.skype%22%7D&tenantId=456904ea-f69f-4fff-8aba-23208c873b57)
- Decompose the application into distributed [microservices](https://docs.nestjs.com/microservices/basics) that can communicate with each other
- Orchestrate local deployment with Docker Compose

<br />

## Teams

### Zebra

- Chad
- Paige
- Neerajan
- Arsalan

### Duck

- Ben
- Changzheng
- Elliot
- Cathy

### Panda Claw

- Joe
- Billy
- Eric

<br />

## Agenda

### Day One

Take this day to complete the NestJS Fundamentals course. If you have already completed the course feel free to explore more complex topics surrounding NestJS, AWS Copilot and RDS, or Docker. By the end of the day you should:

1. Be done with the NestJS Fundamentals course
2. Have the NestJS CLI installed on your machine
3. Have Docker installed and working on your machine
4. 30 minute stand up at the end of the day
   - What went well
   - What didn't go so well
   - Major learning points from the day
   - What your team will be working on the next day

<br />

### Day Two

1. Create a branch in this repo for your project
2. Set up a new nest project

```bash
# IMPORTANT! Create a new project without adding a new git repo
$ nest new project-name --skip-git
```

3. Decide on a Database
4. Create Docker container for the database

```bash
docker run --name Neerpg-DB -e POSTGRES_PASSWORD=pass123 -v postgres_data:/var/lib/postgresql/data/ -p 5432:5432 -e POSTGRES_USER=neerpg postgres
```

Product
id - @PrimaryGeneratedColumn()
Name - String
Category - String

Customer
id - @PrimaryGeneratedColumn()
firstName - String
middleName - String Nullable
lastName - String

Orders
id - @PrimaryGeneratedColumn()

5. Establish a connection to the database with [Typeorm](https://docs.nestjs.com/techniques/database) or [Mongoose](https://docs.nestjs.com/techniques/mongodb)
6. Create CRUD endpoints for Products
7. Create CRUD endpoints for Customers
8. Create CRUD endpoints for Orders
   > **Note:** for CRUD operations, `GET` and `POST` are required for the MVP, `PATCH` and `DELETE` are optional
9. 30 minute stand up at the end of the day
   - What went well
   - What didn't go so well
   - Major learning points from the day
   - What your team will be working on the next day

<br />

### Day Three

1. Add Swagger Documentation to your endpoints
2. Add Validation
   - Add the global Validation Pipe
   - Add validation decorators to DTOs
   - Implement validation on route params
3. Add Jest unit tests for Controllers
4. Add Jest unit tests for Services
   > **Note:** tasks 1 & 2 are the MVP for day three
5. 30 minute stand up at the end of the day

   - What went well
   - What didn't go so well
   - Major learning points from the day
   - What your team will be working on the next day

### Things Learned

When you have an array of objects that needs to be validated, you will want to use

```typesript
@ValidateNested({each: true})
@Type(() => ProductDTO)
```

<br />

### Day Four

1. Complete any remaining MVP goals
2. Work towards accomplishing stretch goals
3. Show & Tell about your team's approach

<br />

## Helpful Approved Packages

### Database Related

- `@nestjs/typeorm`
- `typeorm`

### MongoDB Related

- `@nestjs/mongoose`
- `mongoose`

### Postgres Related

- `pg`

### OracleDB Related

- `oracledb`

### Testing

- `@golevelup/nestjs-testing`

### Validation

- `class-transformer`
- `class-validator`

### Authentication

- `passport`
- `@nestjs/passport`
- `passport-local`
- `@types/passport-local`
- `passport-jwt`
- `@types/passport-jwt`
- `@nestjs/jwt`

### Documentation

- `@nestjs/swagger`
- `swagger-ui-express`

### Other

- `@nestjs/microservices`
- `@nestjs/cqrs`

## Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Domain-Driven Hexagonal Documentation](https://github.com/Sairyss/domain-driven-hexagon/blob/master/README.md)
- [TypeORM Entity Quick Overview](https://orkhan.gitbook.io/typeorm/docs/entities)
- [Class Validator Decorators](https://github.com/typestack/class-validator#validation-decorators)
- [Docker Run](https://docs.docker.com/engine/reference/commandline/run/)
- [Docker Compose Commands](https://docs.docker.com/compose/reference/)
- [Docker Compose Up Options](https://docs.docker.com/compose/reference/up/)
- [PostGres Documentation](https://www.postgresql.org/docs/9.1/index.html)
- [PostGres psql Commands](https://www.postgresql.org/docs/9.1/app-psql.html)

## Pro Tips

```bash
# To scaffold the resources for an endpoint, including DTOs, Entities, Module, Controller, and Service
nest generate resource <resource-name>
```

```bash
# To make mocking in testing easier
npm install --save-dev @golevelup/nestjs-testing
```

```yml
# docker-compose.yml for setting up databases
version: '3'
services:
  postgres_db:
    container_name: Postgres-DB
    image: postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_PASSWORD: pass123
    volumes:
      - postgres_data:/var/lib/postgresql/data/
  mongo_db:
    container_name: Mongo-DB
    image: mongo
    restart: always
    ports:
      - 27017:27017
    environment:
      MONGODB_DATABSE: nest-testing
    volumes:
      - mongo_data:/var/lib/mongodb/data/
volumes:
  postgres_data:
  mongo_data:
```

If you are using windows, you might not be able to use the `docker-compose.yml` file above. Here is an example of how to port a service in the `docker-compose.yml` into a `docker run` command:

```bash
docker run --name Postgres-DB -e POSTGRES_PASSWORD=pass123 -v postgres_data:/var/lib/postgresql/data/ -p 5432:5432 postgres
```
