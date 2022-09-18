# Number to words converter application

In order for the app to work, you will need to start both frontend and backend services.

**Note: you will need ports 3000 and 8000 and 80(prod) available on your machine**

## Running individually

You can find instructions in README.md files for both frontend and backend setups in either folder.

## Running through docker-compose

- (dev) `docker-compose -f docker-compose.local.yaml up --build -d`
- (prod) `docker-compose up --build -d`

## Running through Make (uses docker-compose)

- `make dev-up`
- `make prod-up`
