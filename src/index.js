const express = require("express");
const app = express();
const userRoute = require("./routes/users.routes");
const cors = require(true);
const connectDB = require("./config/db");

require("dotenv").config();
connectDB();

app.use(cors());
app.use(express.json());

//routes
app.get("/", (request, response) => response.send("UCAMP_API"));

//servers
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
