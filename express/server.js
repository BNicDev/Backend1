const express = require('express');
const productManager = require('./productManager');

const app = express();
const PORT = 8080;

const manager = new productManager('./productos.json');

app.use(express.json());


app.get('/products', async(req,res)=>{
    try{
        const productos = await manager.getProducts();

        res.status(200).json({
            status:"success",
            data: productos
        });
    }catch(error){
        res.status(500).json({error: "Error interno del servidor al obtener productos"})
    }
})

app.get('/products/:pid',async (req, res)=>{
    try{
        const idParametro = req.params.pid;

        const idNumerico = Number(idParametro);

        const producto = await manager.getProductsById(idNumerico);

        if(!producto){
            return res.status(404).json({
                status: "error",
                message:`El producto con ID ${idNumerico} no existe.`
            })
        }
        res.status(200).json({
            status:"success",
            data: producto
        })
    }catch(error){
        res.status(500).json({error:"Error interno del servidor al buscar el producto"})
    }
})

app.listen(PORT, ()=>{
    console.log(`servidor de express corriendo en http://localhost:${PORT}`);
})