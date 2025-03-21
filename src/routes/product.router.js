import { Router } from "express";
import productModel from "../models/product.model.js";

const router = Router();

router.post('/', async (req, res) => {
    try {
    const newProduct = await productModel.create(req.body);
    res.status(201).send(newProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).send('Error al crear el producto');
    }
});

router.get('/', async (req, res) => {
    const products = await productModel.paginate({}, { limit: 10, page: 1 });
    res.send(products);
    console.log(products);
});

router.get('/:pid', async (req, res) => {
    try {
    const productId = req.params.pid;
    const product = await productModel.findById(productId);
    res.status(200).send(product);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).send('Error al obtener el producto');
    }
});

router.put('/:pid', async (req, res) => {
    try {
    const productId = req.params.pid;
    const product = await productModel.findByIdAndUpdate(productId, req.body);
    res.status(200).send(product);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error al actualizar el producto');
    }
});

router.put('/', async (req, res) => {
    try {
    const products = await productModel.updateMany({}, req.body);
    res.status(200).send(products);
    } catch (error) {
        console.error('Error al actualizar los productos:', error);
        res.status(500).send('Error al actualizar los productos');
    }
});

router.delete('/:pid', async (req, res) => {
    try {
    const productId = req.params.pid;
    const product = await productModel.findByIdAndDelete(productId);
    res.status(200).send(product);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send('Error al eliminar el producto');
    }
});


export default router;