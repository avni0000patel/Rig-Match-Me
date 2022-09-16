const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class G_amp_Genre extends Model {}

G_amp_Genre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
    gamp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gamp_genre",
  }
);

module.exports = G_amp_Genre;
