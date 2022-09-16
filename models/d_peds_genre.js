const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dpeds_Genre extends Model { }

Dpeds_Genre.init(
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
        modelName: "dpeds_genre",
    }
);

module.exports = Dpeds_Genre;
