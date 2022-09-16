const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class G_fx_Genre extends Model {}

G_fx_Genre.init(
  {
    genre: {
      type: DataTypes.STRING,
      primaryKey: false,
      unique: false,
    },
    accessory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "g_fx_genre",
  }
);

module.exports = G_fx_Genre;
