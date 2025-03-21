// PRODUCTOS:
// GET PARA TRAER PRODUCTOS CON PAGINACIÓN
// PAGINAR LOS PRODUCTOS


import express from 'express';
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js"
import viewsRouter from './routes/views.router.js';
import handlebars from "express-handlebars";
import __dirname from './utils.js';
import { config } from './config/config.js';
import mongoose from "mongoose";

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//rutas estaticas
app.use(express.static(__dirname + "/public"));

// Configuración de la conexión a la base de datos
const environment = async () => {
    try {
        await mongoose.connect(config.URL_MONGODB);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Error al conectar a la base de datos", error);
        process.exit();
    }
}

environment();

app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}`);
});

//Implementación de routers
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/', viewsRouter);