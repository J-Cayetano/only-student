'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class s_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    s_type.init(
        {
            type_id:
            {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            type_name:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,

                validate:
                {
                    notNull: { msg: "type name should not be null." },
                    notEmpty: { msg: "type name should not be empty." }
                }
            },
            type_description: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },

    );
    return s_type;
};