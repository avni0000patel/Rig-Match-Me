const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rig extends Model { }

Rig.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instrument: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessory1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessory2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "rig",
    }
);

module.exports = Rig;
