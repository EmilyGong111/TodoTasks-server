require('dotenv').config();//Read .env file, must have this sentence at top of this file
const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const v1Router = require("./routes");
const logger = require('./utils/logger');
const swaggerJsDoc = require('./utils/swagger');
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());//Protect server from attack
app.use(cors({origin:"*"}));
app.use(morgan('common'));//HTTP request logger middleware for node.js. Will log the request ip, time, and method in terminal. Can only print, but can not store.
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

//GET/v1/tasks
// app.use('/v1')
//GET/tasks
app.use(v1Router);
app.listen(PORT,()=>{logger.info(`server is listening on port: ${PORT}`)}); //Will log the message in the format in logger.js

//monitoring (You many need monitoring in your sever to make sure your sever is working)
// /health_check
// /healthz

//sometimes we use morgan with winston to store the requests' info into somewhere. 