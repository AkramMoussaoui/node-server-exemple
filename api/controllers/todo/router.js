const express = require("express");
const todoController = require("./controller");
const todoSchema = require("../../../validators/todo");
const validate = require("../../../validators/validate");

const todoRouter = express.Router();

todoRouter.get("/:id", todoController.getTodoByID);

todoRouter.get("/", todoController.getTodos);

todoRouter.post("/", validate(todoSchema.postTodo), todoController.addTodo);

todoRouter.put("/:id", todoController.updateTodo);

todoRouter.patch("/:id", todoController.patchTodo);

todoRouter.delete("/:id", todoController.deleteTodo);

module.exports = todoRouter;
