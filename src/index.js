const express = require("express");

const userController = require("./controllers/user.controllers");
const studentController = require("./controllers/student.controllers");
const batchController = require("./controllers/batch.controllers");

const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/student", studentController);
app.use("/batch", batchController);

module.exports = app;

