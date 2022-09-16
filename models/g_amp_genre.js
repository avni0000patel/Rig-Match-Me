const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Gamp_Genre extends Model { }

Gamp_Genre.init(
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
        modelName: "gamp_genre",
    }
);

module.exports = Gamp_Genre;
