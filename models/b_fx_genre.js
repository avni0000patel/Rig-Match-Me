const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class B_fx_Genre extends Model {}

B_fx_Genre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
    bfx_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "b_fx_genre",
  }
);

module.exports = B_fx_Genre;
