import User from "../model/userModel.js";

//create
const createUser = async (req, res) => {
  try {
    const {name, email} = req.body
    const user = new User({name, email})
    const savedUser = await user.save()
    res.status(201).send(savedUser)
  } catch (error) {
    console.log(error, error.message);
    res.status(500).send("failed to create user");
  }
};

//get all users
const readUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error, "failed to get users");
    res.status(500).send("failed to get users");
  }
};

//read single user
const readSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("failed to get this user");
  }
};

//update
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("failed to update user");
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).send("user deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("failed to delete user")
    
  }
};
export { createUser, readUser, readSingleUser, updateUser, deleteUser };
