'use strict';

const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class s_subject extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }


    s_subject.init(
        {
            subj_id: DataTypes.STRING,
            subj_name: DataTypes.STRING,
            subj_description: DataTypes.STRING
        },

        {
            sequelize,
            modelName: 's_subject',
        });
    return s_subject;
};