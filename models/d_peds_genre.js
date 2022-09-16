const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class D_peds_Genre extends Model {}

D_peds_Genre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
    dpeds_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "d_peds_genre",
  }
);

module.exports = D_peds_Genre;
