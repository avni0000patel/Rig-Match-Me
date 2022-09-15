const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Instrument extends Model {}

Instrument.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    instrument_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // },
    // genre_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //         model: 'genre',
    //         key: 'id'
    //     }
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "instrument",
  }
);

module.exports = Instrument;
