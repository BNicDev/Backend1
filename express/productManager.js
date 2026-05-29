const fs = require('fs/promises');

class productManager{
    constructor(path){
        this.path = path;
    }

    async getProducts(){
        try{
            const contenido = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(contenido);
    
        }catch(error){
            if(error.code === 'ENOENT'){
                return [];
            }
            console.error("Error al registrar el producto", error)
            return [];
        }
    }

    async addProducts(product){
        try{
            const listProducts = await this.getProducts();

            let newId = 1;
            if(listProducts.length > 0){
                newId = listProducts[listProducts.length - 1].id+1;
            }
            const newProduct = {
                id: newId,
                title: product.title || "Sin titulo",
                description: product.description || "sin descripcion",
                price: product.price || 0,
                thumbnail: product.code || "no image",
                code: product.code || "n/a",
                stock: product.stock || 0
            };

            await fs.writeFile(this.path, JSON.stringify(listProducts, null, 2), 'utf-8');
            return newProduct;
        }catch(error){
            console.error("Error al agregar producto", error);
        }
    }

    async getProductsById(id){
        try{
            const listProducts = await this.getProducts();

            const productoEncontrado = listProducts.find(prod => prod.id === id);
            return productoEncontrado;
        }catch(error){
            console.error("Error al buscar producto por ID", error)
        }
    }
}

module.exports = productManager;
