const User = require("../models/users"); //model allows generate o modify database users
//still missing jwt and bcrypts info
const getUser = async (request, response) => {
  try {
    const users = await User.find({});
    response.json({ users });
  } catch (error) {
    response
      .status(500)
      .json({ message: "there is an error getting data from db" });
  }
};

//create user and need with jwt
const createUser = async (request, response) => {
  const { username, email, password } = request.body; //get this data from request

  try {
    const newUser = await User.create({ username, email, password });
    response.json(newUser);
  } catch (error) {
    response.status(500).json({
      message: "there is an error creating user",
    });
  }
};

//update
const updateUser = async (request, reponse) => {
  const { id, username, email, password } = request.body;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true }
    );
    response.json(updateUser);
  } catch (error) {
    response.status(500).json({
      message: "here is an error updating user",
    });
  }
};

//delete
const deleteUsers = async (request, response) => {
  const { id } = request.body;

  try {
    const deleteuser = await User.findByIdAndDelete({ _id: id });
    response.json(deleteuser);
  } catch (error) {
    response.status(500).json({
      message: "there is an error deleting user",
    });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUsers };
