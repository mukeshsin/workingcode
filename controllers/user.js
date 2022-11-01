import User from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).send({
      message: "User Created",
    });
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.create(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "User updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "user Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};
