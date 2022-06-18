'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class s_category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    s_category.init({
        cate_id: DataTypes.STRING,
        cate_name: DataTypes.STRING,
        cate_description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 's_category',
    });
    return s_category;
};