'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class s_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  s_level.init(
    {
      level_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      leve_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlpha: { error: "Level name should only contain Alphabets." },
          notNull: { error: "Level name should not be null." },
          notEmpty: { error: "Level name should not be empty." }
        }
      },
      leve_description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isAlphanumeric: true,
          len: [5 - 30],
          notEmpty: true
        }
      },
    },
    {
      sequelize,
      modelName: 's_level',
      timestamps: true,
      createdAt: "leve_createdAt",
      updatedAt: "leve_updatedAt"
    }
  );
  return s_level;
};