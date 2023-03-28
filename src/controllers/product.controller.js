//obtain the model that allow modify or generate a database product
const Products = require ('../models/products');



//get endpoint
const getProduct = async (request,response) =>{
    try{
        const Product = await Products.find({username,email,password});
        response.json({Products})
    } catch(error){
        response.status(500).json({
            message:'there is an error getting products'
        })
    }
}

//create to qery
const createProduct = async(request, response) => {
    const {description,quantity,price, type,dishname} = request.body;

    try{
        const newProduct = await Products.create({description,quantity,price, type,dishname});
        response.json(newProduct);
    } catch(error) {
        response.status =(500).json({message: 'there is an error creating a product'})
    }
}

//update
const updateProduct = async (request, response) => {
    const {id,dishname,type} = request.body

    try {
        const updateProduct = await Products.findByIdAndUpdate(id,{dishname,type},{new:true})
        response.json(updateProduct);
    } catch (error) {
        response.status(500).json({
            message:'there is an error updating product'
        })
    }
}

//delete
const deleteProduct = async (request, response) => {
    const {id} = request.body;

    try {
        const deleteProduct = await Products.findByIdAndDelete({_id:id})
        response.json(deleteProduct);
    } catch (error) {
        response.status(500).json({
            message:'there is an error deleting product'
        })
    }
}

module.exports={getProduct, createProduct, updateProduct, deleteProduct}