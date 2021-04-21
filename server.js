const { json } = require("express");
const express = require("express");
const app = express();
require("dotenv/config");
// const port = process.env.port;
const port = 4000;
const connectDB = require("./config/connectDB");
const userRouter = require("./models/User");

app.use(express.json());
connectDB();
app.use("./api/user", userRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
