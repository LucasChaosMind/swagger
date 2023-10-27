import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './swagger';

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import routes from './src/routes/index'
import { fetchExternalData } from './src/controllers/UserAccountController';


/*import swaggerConfig, { openApiDefinitionPath } from './swagger';
  import swaggerGenerator from 'express-swagger-generator';*/

const app = express();

// Configuração do Express
app.use(bodyParser.json());

// Configuração do TypeORM
createConnection()
  .then(() => {
    console.log('Conectado ao banco de dados');
  })
  .catch(error => {
    console.error('Erro na conexão com o banco de dados:', error);
  });

// Rotas
app.use(routes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));


// Configuração do Swagger com o express-swagger-generator
//swaggerGenerator(app)(swaggerConfig, openApiDefinitionPath);

// Rota para dados externos
app.get('/api/external-data', fetchExternalData);

// Inicializa o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});