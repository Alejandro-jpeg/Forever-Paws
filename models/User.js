// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {}

// set up fields and rules for User model
User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        isDecimal: true,
        },
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isEmail: true,
        },
    },
    street_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    favorite_pet_id:{
    type: DataTypes.INTEGER,
    reference: {
        model: 'pet',
        key: 'id'
    }
    }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
        }
);

module.exports = User;
