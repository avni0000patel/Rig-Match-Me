const Genre = require("./genre");
const User = require("./user");

User.hasMany(Genre, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Genre.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Genre, User };
