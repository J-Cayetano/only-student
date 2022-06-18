'use strict';

// Import Packages
const { Model } = require('sequelize');
const dataTable = require('sequelize-datatables');
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

// Environment Variable
dotenv.config();
var SALT = parseInt(process.env.SALT_ROUNDS);

// Protected Attributes
const PROTECTED_ATTR = ["user_password"];


// ------------------------------------------------------------------

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
                        args: [['evaluator', 'student', 'tutor']],
                        msg: "Must be evaluator, student, tutor"
                    },
                    notEmpty: true
                }
            },
            user_email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                    notEmpty: true
                }
            },
            user_password: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true,

                }
            },
            user_isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: 1,
                allowNull: true
            },
            // user_firstName: {

            // },
            // user_middlenName: {

            // },
            // user_lastName: {

            // },
            // user_lastName: {
            // set(value) {
            // this.setDataValue("user_fullName", this.)
            // }
            // },
            // user_birthDate: {

            // },
            // user_contactNo: {

            // },
            // user_bio: {

            // },
            // user_isGraduated: {

            // },
            // user_evaluateStatus: {

            // }
        },
        {
            sequelize,
            modelName: 'user_account',
            timestamps: true,
            createdAt: "user_createdAt",
            updatedAt: "user_updatedAt",
            paranoid: true,
            deletedAt: "user_deletedAt",
            hooks: {
                beforeCreate: async (user_account) => {
                    if (user_account.user_password) {
                        const salt = await bcrypt.genSaltSync(SALT);
                        user_account.user_password = bcrypt.hashSync(user_account.user_password, salt);
                    }
                },
                beforeUpdate: async (user_account) => {
                    if (user_account.user_password) {
                        const salt = await bcrypt.genSaltSync(SALT);
                        user_account.user_password = bcrypt.hashSync(user_account.user_password, salt);
                    }
                }
            }
            // instanceMethods: {
            //     validPassword: (user_password) => {
            //         return bcrypt.compareSync(user_password, this.user_password);
            //     }
            // }
        }
    );
    return user_account;
};