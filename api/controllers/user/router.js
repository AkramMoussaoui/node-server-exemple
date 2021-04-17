const express = require("express");
const userController = require("./controller");
const userSchema = require("../../../validators/user");
const validate = require("../../../validators/validate");
const userRouter = express.Router();

userRouter.get("/:id", userController.getUserByID);
userRouter.get("/", userController.getUsers);
userRouter.post("/", validate(userSchema.postUser), userController.addUser);
userRouter.put("/:id", userController.updateUser);
userRouter.patch("/:id", userController.updateActive);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
