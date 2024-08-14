const UsersController = require("./controllers/UserControllers");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UsersController.listUsers,
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: UsersController.getUsersById,
  },
];
