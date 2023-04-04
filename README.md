## Sneakers Store MFE

### Usage

1. Install app dependencies

   `npm install`

2. Install host dependencies

   `npm run install-host-deps`

3. Install remotes dependencies

   `npm run install-remotes-deps`

4. Run all microfrontends at once (host & remotes)

   `npm run microfrontend`

5. Access to sneakers store

   `http://localhost:5000/`

| Microfrontend | Type   | Execution             | Link                   |
| ------------- | ------ | --------------------- | ---------------------- |
| Homepage      | Host   | `npm run host`        | http://localhost:5000/ |
| Search bar    | Remote | `npm run searchbar`   | http://localhost:5001/ |
| Product list  | Remote | `npm run productlist` | http://localhost:5002/ |
| Cart          | Remote | `npm run cart`        | http://localhost:5003/ |
