FROM node:16-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM build as test
CMD [ "npm", "run", "test" ]

FROM nginx:alpine as prod
COPY --from=build /app/dist/ /usr/share/nginx/html/
