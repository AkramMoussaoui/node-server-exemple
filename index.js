const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const todoRouter = require("./api/controllers/todo/router");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 2000;

app.use("/todo", todoRouter);

app.delete("/:id", (req, res) => {});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
