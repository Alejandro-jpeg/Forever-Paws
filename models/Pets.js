const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pet_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_breed:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_type:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_gender:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_age_range:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);

module.exports = Pet;
