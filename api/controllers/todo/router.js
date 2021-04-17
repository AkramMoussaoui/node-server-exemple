const express = require("express");
const todoController = require("./controller");

const todoRouter = express.Router();

todoRouter.get("/:id", todoController.getTodoByID);

todoRouter.get("/", todoController.getTodos);

todoRouter.post("/", todoController.addTodo);

todoRouter.put("/:id", todoController.updateTodo);

todoRouter.patch("/:id", todoController.patchTodo);

todoRouter.delete("/:id", todoController.deleteTodo);

module.exports = todoRouter;
