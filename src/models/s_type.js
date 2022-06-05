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
    s_type.init({
        type_id: DataTypes.STRING,
        type_name: DataTypes.STRING,
        type_description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 's_type',
    });
    return s_type;
};