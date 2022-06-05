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
        tutr_id: DataTypes.STRING,
        tutr_remarks: DataTypes.STRING,
        tutr_requirementLinks: DataTypes.STRING,
        tutr_fileLink: DataTypes.STRING
    }, {
        sequelize,
        modelName: 's_tutor_requirement',
    });
    return s_tutor_requirement;
};