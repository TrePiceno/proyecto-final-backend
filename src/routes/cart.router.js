import { Router } from "express";
import cartModel from "../models/cart.model.js";

const router = Router();

router.post('/', async (req, res) => {
    try {
        const newCart = await cartModel.create(req.body);
        res.status(201).send(newCart);
    } catch (error) {
        console.error('Error al crear el carrito:', error);
        res.status(500).send('Error al crear el carrito');
    }
});

router.get('/:cid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cart = await cartModel.findById(cartId).populate('products.product');
        res.status(200).send(cart);
    } catch (error) {
        console.error('Error al obtener el carrito:', error);
        res.status(500).send('Error al obtener el carrito');
    }
});

router.put ('/cid/product/:pid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const quantity = req.body.quantity;
        const cart = await cartModel.findById(cartId);
        const productIndex = cart.products.findIndex(product => product.product.toString() === productId);
        if (productIndex !== -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }
        await cart.save();
        res.status(200).send(cart);
    } catch (error) {
        console.error('Error al actualizar el carrito:', error);
        res.status(500).send('Error al actualizar el carrito');
    }
});

router.delete('/:cid/product/:pid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const cart = await cartModel.findById(cartId);
        const productIndex = cart.products.findIndex(product => product.product.toString() === productId);
        if (productIndex !== -1) {
            cart.products.splice(productIndex, 1);
            await cart.save();
            res.status(200).send(cart);
        } else {
            res.status(404).send('Producto no encontrado en el carrito');
        }
    } catch (error) {
        console.error('Error al eliminar el producto del carrito:', error);
        res.status(500).send('Error al eliminar el producto del carrito');
    }
});

router.delete('/:cid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cart = await cartModel.findById(cartId);
        cart.products = [];
        await cart.save();
        res.status(200).send(cart);
    } catch (error) {
        console.error('Error al vaciar el carrito:', error);
        res.status(500).send('Error al vaciar el carrito');
    }
});

export default router;