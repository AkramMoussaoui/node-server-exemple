const joi = require("joi");

module.exports = {
  postTodo: {
    body: {
      task: joi.string().required(),
    },
    query: {
      name: joi.string().required(),
    },
  },
};
