//importing the express module and create an instans of it
const { Router } = require("express");
const router = Router();
const {getUser,createUser,updateUser,deleteUsers,loginUser,verifyUser} = require("../controllers/users.controller");

//routes
//read
router.get("/get", getUser);
//create
router.post("/new", createUser);
//update
router.put("/update", updateUser);
//delete
router.delete('/delete', deleteUsers);

router.post('/login',loginUser);
router.post('/verify',verifyUser);
//exports
module.exports = router;
