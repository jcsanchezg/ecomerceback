const {Router} = require('express')
const router = Router();
const {getProduct, createProduct, updateProduct , deleteProduct} = require('../controllers/product.controller')
const auth=require('../middlewares/auth')

//create routes
//read
router.get('/get', getProduct)
//create
router.post('/new', auth, createProduct)
//put
router.put('/update', auth, updateProduct)
//delete
router.delete('/delete', auth, deleteProduct)
//exports
module.exports=router;

