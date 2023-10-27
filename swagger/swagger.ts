//import { SwaggerDefinition } from 'swagger-jsdoc';
import swaggerAutogen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = /*SwaggerDefinition = */{
  info: {
      version: 'v1.0.0',
      title: 'Swagger_API',
      description: 'PoC Swagger with swagger-autogen and TypeScript'
  },
  servers: [
      {
          url: 'http://localhost:8080',
          description: ''
      },
  ],
  components: {
      securitySchemes: {
          bearerAuth: {
              type: 'http',
              scheme: 'bearer',
          }
      }
  }
};
export const openApiDefinitionPath = './src/openapi.json';

export default swaggerDefinition;


const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, swaggerDefinition);