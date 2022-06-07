'use strict';
const { Model } = require('sequelize');

const PROTECTED_ATTR = ["user_id"];

module.exports = (sequelize, DataTypes) => {

    class user_account extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }

        toJSON() {
            const attr = { ...this.get() };

            for (const x of PROTECTED_ATTR) {
                delete attr[x];
            }
            return attr;
        }
    }

    user_account.init(
        {
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            user_accountType: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: {
                        args: [['admin', 'evaluator', 'student', 'tutor']],
                        msg: "Must be evaluator, student, tutor"
                    }
                }
            },
            user_email: {

            },
            user_password: {

            },
            user_isActive: {

            },
            user_firstName: {

            },
            user_middlenName: {

            },
            user_lastName: {

            },
            user_birthDate: {

            },
            user_contactNo: {

            },
            user_bio: {

            },
            user_isGraduated: {

            },
            user_evaluateStatus: {

            }
        },
        {
            sequelize,
            modelName: 'user_account',
            timestamps: true,
            createdAt: "user_createdAt",
            updatedAt: "user_updatedAt",
            paranoid: true,
            deletedAt: "user_deletedAt"
        }
    );
    return user_account;
};