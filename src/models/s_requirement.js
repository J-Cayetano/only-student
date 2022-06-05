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
        requ_id: DataTypes.STRING,
        requ_name: DataTypes.STRING,
        requ_description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 's_requirement',
    });
    return s_requirement;
};