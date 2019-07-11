# DSM API Proof of Concept

[![Netlify Status](https://api.netlify.com/api/v1/badges/c068de8b-aa34-4215-8208-087be7e6dac6/deploy-status)](https://app.netlify.com/sites/dsm-todos/deploys)

👋Hi! Thanks for visiting this project. We've set out to create accessible examples using [InVision Design System Manager (DSM)](https://www.invisionapp.com/design-system-manager). This example includes the following:

#### Fetching styles from DSM
- See [`src/utils/fetchStyles.js`](https://github.com/martinlaws/dsm-todos/blob/master/src/utils/fetchStyles.js) to see how styles are being fetched, parsed, and returned from DSM's JSON API.
- See [`vue.config.js`](https://github.com/martinlaws/dsm-todos/blob/master/vue.config.js) to see how the styles fetched above are loaded in as [Ant Design Vue theme customizations](https://vue.ant.design/docs/vue/customize-theme/).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Running the Vue UI (optional)
```
vue ui
```