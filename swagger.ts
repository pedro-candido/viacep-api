const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'ViaCep API',
    description: 'API for request addresses in viacep api',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/index.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
