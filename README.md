# Sisar App Backend

This is the backend service for the Sisar App, built with [NestJS](https://nestjs.com/). It provides RESTful APIs and background services for managing users, organizations, plans, schedules, and more.

## Features
- Modular architecture (users, auth, organization, plans, schedules, services)
- PostgreSQL database integration (via Prisma ORM)
- Redis caching
- Authentication and authorization
- Email notifications
- Background scheduling
- Comprehensive test coverage

## Project Structure
```
src/
  app.module.ts         # Main NestJS module
  main.ts               # Application entry point
  modules/              # Feature modules (auth, users, organization, etc.)
  infrastructure/       # Data access, gateways, and integrations
  shared/               # Shared utilities, enums, decorators, etc.
  scheduler/            # Background job scheduling
  test/                 # End-to-end tests
orm-build/
  generated/prisma/     # Prisma client and schema
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- PostgreSQL database
- Redis server

### Installation
```bash
pnpm install
```

### Environment Variables
Create a `.env` file in the root directory and configure your database, Redis, and other secrets as needed.

### Database Setup
Generate and apply Prisma migrations:
```bash
pnpm prisma migrate dev
```

### Running the App
```bash
pnpm start:dev
```

### Running Tests
```bash
pnpm test
```

### Linting
```bash
pnpm lint
```

## Scripts
- `start` - Run the app in production mode
- `start:dev` - Run the app in development mode (with hot reload)
- `start:debug` - Run the app in debug mode
- `start:prod` - Run the compiled app in production
- `start:worker` - Run the background scheduler worker
- `build` - Compile the TypeScript source
- `format` - Format code with Prettier
- `lint` - Run ESLint and auto-fix issues
- `set:initial:data` - Seed the database with initial data
- `test` - Run unit tests
- `test:watch` - Run unit tests in watch mode
- `test:cov` - Run tests with coverage report
- `test:debug` - Run tests in debug mode
- `test:e2e` - Run end-to-end tests
- `format:schema` - Format the Prisma schema
- `migrate` - Run Prisma migrations
- `gen` - Generate Prisma client
- `prisma` - Run Prisma CLI commands

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
