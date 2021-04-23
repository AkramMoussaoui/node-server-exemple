const User = require("../../../models/user");

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(500).json({
        message: "user doesn't exist",
        data: {},
      });
    }
    res.status(200).json({
      message: "Fetched one successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      data: {},
    });
  }
};
const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "Fetched successfully",
    data: users,
  });
};
const addUser = async (req, res) => {
  const { nom } = req.body;
  const { prenom } = req.body;
  const { phone } = req.body;
  const { email } = req.body;

  const user = new User({
    nom,
    prenom,
    phone,
    email,
  });

  await user.save();

  res.status(201).json({
    message: "Successfully added",
    data: user,
  });
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom } = req.body;
    const { prenom } = req.body;
    const { phone } = req.body;
    const { Email } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(500).json({
        message: "user doesn't exist",
        data: {},
      });
    }
    const user2 = {};
    user2.nom = nom || user.nom;
    user2.Email = Email || user.Email;
    user2.prenom = prenom || user.prenom;
    user2.phone = phone || user.phone;

    const newUser = await User.findByIdAndUpdate(id, user2, { new: true });
    if (!newUser) {
      return res.status(500).json({
        message: "user failed to update",
        data: {},
      });
    }
    return res.status(200).json({
      message: "Updated successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("ERROR => ", error);
    return res.status(500).json({
      message: "ERROR on server",
      data: {},
    });
  }
};
const updateActive = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(500).json({
      message: "user doesn't exist",
      data: {},
    });
  }
  const newUser = await User.findByIdAndUpdate(
    id,
    { is_active: !user.is_active },
    { new: true }
  );
  if (!newUser) {
    return res.status(500).json({
      message: "user failed to patch",
      data: {},
    });
  }
  res.status(200).json({
    message: "Successfully modified",
    data: newUser,
  });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(500).json({
      message: "user doesn't exist",
      data: {},
    });
  }
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(500).json({
      message: "user failed to delete",
      data: {},
    });
  }
  res.status(200).json({
    message: "Successfully deleted",
    data: deletedUser,
  });
};

module.exports = {
  getUserByID,
  getUsers,
  addUser,
  updateUser,
  updateActive,
  deleteUser,
};
