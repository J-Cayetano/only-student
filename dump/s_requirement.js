'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class s_requirement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    s_requirement.init({
        requ_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        requ_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: { msg: "Requirement name should not be null." },
                notEmpty: { msg: "Requirement name should not be empty." }
            }
        },

        requ_description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            sequelize,
            modelName: 's_requirement',
            timestamps: true,
            createdAt: "requ_createdAt",
            updatedAt: "requ_updatedAt",
            paranoid: true,
            deletedAt: "requ_deletedAt"

        });
    return s_requirement;
};