const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Agency extends Model {}

Agency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    webpage: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'agency',
  }
);

module.exports = Agency;
