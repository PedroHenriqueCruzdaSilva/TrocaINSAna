import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Conectado no DB')
}).catch(err => {
    console.log(err.message)
})

const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Produto não encontrado'})
    }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor está hospedado em http://localhost:${port}`)
})