## Sneakers Store MFE

### Usage

1. Install all microfrontends dependencies (host & remotes)

   `npm run install-deps`

2. Run all microfrontends

   `npm run sneakers-store`

3. Access to homepage microfrontend

   `http://localhost:5000/`

### Architecture preview

| Microfrontend | Type   | Alone execution       | Access link            |
| ------------- | ------ | --------------------- | ---------------------- |
| Homepage      | Host   | `npm run homepage`    | http://localhost:5000/ |
| Search bar    | Remote | `npm run searchbar`   | http://localhost:5001/ |
| Product list  | Remote | `npm run productlist` | http://localhost:5002/ |
| Cart          | Remote | `npm run cart`        | http://localhost:5003/ |
