const {Router} = require('express')
const router = Router();
const {getProduct, createProduct, updateProduct , deleteProduct} = require('../controllers/product.controller')
const auth=requiere('../middlewares/auth')

//create routes
//read
router.get('/get',auth,getProduct)
//create
router.post('/post',auth,createProduct)
//put
router.put('/update', updateProduct)
//delete
router.delete('/delete',deleteProduct)
//exports
module.exports=router;

