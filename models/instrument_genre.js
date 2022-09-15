const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Instrument_Genre extends Model {}

Instrument_Genre.init(
  {
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false,
    },
    instrument_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      unique: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "instrument_genre",
  }
);

module.exports = Instrument_Genre;
