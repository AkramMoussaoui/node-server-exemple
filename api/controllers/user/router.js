const express = require('express');
const userController = require('./controller');

const userRouter = express.Router();

userRouter.get('/:id', userController.getUserByID);
userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.patch('/:id', userController.updateActive);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
