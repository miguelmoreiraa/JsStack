const UsersController = require("./controllers/UserControllers");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UsersController.listUsers,
  },
  // Add your routes here
];
