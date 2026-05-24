class ProductManager{
    constructor(){
        this.products = [];
        this.currentId = 1;
    }

    addProduct(title, description, price,thumbnail, code, stock){
        //validacion de si los campos son existentes
        if(!title || !description || !price || !thumbnail || !code || stock === undefined){
            console.error("Error : todos los campos son obligatorios.");
            return;
        }
        //validacacion  de que el codigo no se repita 
        const codeExists = this.products.some(products => products.code === code);
        if(codeExists){
            console.error(`Error: el codigo "${code}" ya existe.`);
            return;
        }
    
        //creamos el producto con las propiedad y el id correspondiente
        const newProduct ={
            id: this.currentId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
    
        //guardamos el producto en el array e incrementamos el id para el proximo producto
        this.products.push(newProduct);
        this.currentId++;
        console.log(`producto "${title}" agregado con exito (ID: ${newProduct.id}).`)
    
    }
    
    getProducts(){
        return this.products;
    }
    
    getProductsById(id){
        const foundProduct = this.products.find(product => product.id === id );

        // si find no lo encuentra devolvemos undefined
        if(!foundProduct){
            console.error("Not Found");
            return;
        }
        return foundProduct;
    }
}
module.exports = ProductManager;
