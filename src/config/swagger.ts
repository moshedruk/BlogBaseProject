import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todos',
      version: '1.0.0',
      description: 'A swagger for todos mengement ',
    },
  },
  
  apis: ['C:/Users/רובי/Desktop/משה/posters/dist/routes/*.js'], // Path to your API routes
};

 export const specs = swaggerJsdoc(options);

 export default swaggerUi
