'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class s_tutor_requirement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    s_tutor_requirement.init({
        tutr_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        tutr_remarks: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: { msg: "remarks should not be null." },
                notEmpty: { msg: "remarks should not be empty." }
            }
        },

        tutr_requirementLink: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isUrl: true }
        },

        tutr_fileLink: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isUrl: true }
        },

        tutr_requirementId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            sequelize,
            modelName: 's_tutor_requirement',
            timestamps: true,
            createdAt: "tutr_createdAt",
            updatedAt: "tutr_updatedAt",
            paranoid: true,
            deletedAt: "tutr_deletedAt"
        },
        {
            sequelize,
            modelName: 's_tutor_requirement',
        });
    return s_tutor_requirement;
};