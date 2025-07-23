
const userService = require('../services/userService');

exports.signup = async (req, res, next) => {
  try {
    await userService.registerUser(req.body);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await userService.authenticateUser(username, password);

    if (!token) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ token });
  } catch (error) {
    next(error);
  }
};
