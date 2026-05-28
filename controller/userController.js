import userModel from "../model/userModel.js";

const signUp = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.create({ name, email });
    return res.status(201).json({ message: "User created succefully", user });
  } catch (err) {
    return res.status(500).json({ message: "Error creating user", err });
  }
};
export default signUp;
