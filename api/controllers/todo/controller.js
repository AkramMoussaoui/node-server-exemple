const { v4: uuidv4 } = require("uuid");
const todos = [];

const getTodoByID = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((elem) => (elem.id = id));
  res.status(399).json({
    message: "Fetched one successfully",
    data: todo,
  });
};

const getTodos = (req, res) => {
  res.status(200).json({
    message: "Fetched successfully",
    data: todos,
  });
};

const addTodo = (req, res) => {
  const { task } = req.body;
  const todo = {
    id: uuidv4(),
    task,
    checked: false,
  };
  todos.push(todo);
  res.status(201).json({
    message: "Successfully added",
    data: todo,
  });
};

const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "Id missing",
        data: {},
      });
    }
    if (!task) {
      return res.status(400).json({
        message: "task missing",
        data: {},
      });
    }
    const todo = todos.find((elem) => elem.id === id);
    if (!todo) {
      return res.status(500).json({
        message: "Todo doesn't exist",
        data: {},
      });
    }
    todo.task = task;
    return res.status(200).json({
      message: "Updated successfully",
      data: todo,
    });
  } catch (error) {
    console.log("ERROR => ", error);
    return res.status(500).json({
      message: "ERROR on server",
      data: {},
    });
  }
};

const patchTodo = (req, res) => {};

const deleteTodo = (req, res) => {};

module.exports = {
  getTodoByID,
  getTodos,
  addTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
};
