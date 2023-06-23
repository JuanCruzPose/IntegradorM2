const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const usersFound = users.find(
    (user) => user.email === email && user.password === password
  );

  if (usersFound) return res.status(200).json({ access: true });
  return res.status(404).json({ access: false });
};

module.exports = {
  login,
};
