import express from "express";
import data from "./data.js";

const app = express()

app.get('/api/products/trocaINSAna', (req, res) => {
    res.send(data.products)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Servidor está hospedado em http://localhost:${port}`)
})