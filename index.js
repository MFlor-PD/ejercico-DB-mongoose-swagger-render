const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs');


dotenv.config();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/tasks', routes);

app.get('/', (req, res) => {
  res.send('API de tareas en funcionamiento. Visita /api-docs para la documentación.');
});

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



















