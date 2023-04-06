//dependencias
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';


// declaracion de variable de rutas

import weatherRoutes from './routes/weather.routes';

//inicializar el servidor
const app = express();
app.set('port', config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//uso de rutas

app.use("/api",weatherRoutes);

export default app;