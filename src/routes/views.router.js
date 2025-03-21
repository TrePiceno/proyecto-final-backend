import { Router } from "express";
import productModel from "../models/product.model.js";

const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: "Proyecto Backend I CoderHouse", style: "home.css" });
});

router.get('/products', async (req, res) => {
    const elementosPorPagina = req.query.limit ?? 10;
    const pagActual = req.query.page ?? 1;

    const products = await productModel.paginate({}, { limit: elementosPorPagina, page: pagActual });
    products.docs = products.docs.map(product => product.toObject());

    res.render('products', { prod: products, title: "Proyecto Backend I CoderHouse", style: "index.css" });
});


router.get('/products/:pid', async (req, res) => {
    try {
        const productId = req.params.pid;
        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).render('error', {
                message: 'Producto no encontrado',
                title: "Error - Proyecto Backend I CoderHouse",
                style: "index.css"
            });
        }

        res.render('productDetail', {
            product: product.toObject(),
            title: `${product.title} - Proyecto Backend I CoderHouse`,
            style: "index.css"
        });
    } catch (error) {
        console.error('Error al obtener el detalle del producto:', error);
        res.status(500).render('error', {
            message: 'Error al obtener el detalle del producto',
            title: "Error - Proyecto Backend I CoderHouse",
            style: "index.css"
        });
    }
});

export default router;