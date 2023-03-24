const {Router} = require('express')
const router = Router();
const {getProduct, createProduct, updateProduct , deleteProduct} = require('../controllers/product.controller')

//create routes
//read
router.get('/get',getProduct)
//create
router.post('/post',createProduct)
//put
router.put('/update', updateProduct)
//delete
router.delete('/delete',deleteProduct)
//exports
module.exports=router;

