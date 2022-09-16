const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Bamp_Genre extends Model { }

Bamp_Genre.init(
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
        modelName: "bamp_genre",
    }
);

module.exports = Bamp_Genre;
