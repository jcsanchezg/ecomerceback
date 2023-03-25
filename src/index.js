const express = require('express');
const app = express();
const userRoute = require('./routes/usersroutes');
const cors = require('cors');
const connectDB = require('./config/db');


require('dotenv').config();
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/', (request, response) => response.send('UCAMP_API'));
app.use('/user', userRoute);
// app.use('/product',userProduct);

//servers
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
