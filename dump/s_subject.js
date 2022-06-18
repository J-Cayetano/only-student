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
    s_subject.init({
        subj_id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        subj_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        subj_description:
        {
            type: DataTypes.STRING,
            allowNull: true

        }
    }, {
        sequelize,
        modelName: 's_subject',
    });
    return s_subject;
};