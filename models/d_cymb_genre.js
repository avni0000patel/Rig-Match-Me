const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class D_cymb_Genre extends Model {}

D_cymb_Genre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
    dcymb_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "d_cymb_genre",
  }
);

module.exports = D_cymb_Genre;
