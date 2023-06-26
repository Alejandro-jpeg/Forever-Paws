const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection.js');

class FavoritePet extends Model {}

FavoritePet.init(

    {

        user_id: {

            type: DataTypes.INTEGER,
            allowNull: false,
            references: {

                model: 'user',
                key: 'id'

            }

        },
        pet_id: {

            type: DataTypes.INTEGER,
            allowNull: false,
            references: {

                model: 'pet',
                key: 'id'

            }

        }

    },
    {

        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite_pet'

    }

);

module.exports = FavoritePet;