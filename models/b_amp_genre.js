const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class B_amp_Genre extends Model {}

B_amp_Genre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
    bamp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "b_amp_genre",
  }
);

module.exports = B_amp_Genre;
