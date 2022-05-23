require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/get", require("./getReports/getReports.controller.js"))

// server port
app.listen(9999, () => console.log("Server started on port 9999"));