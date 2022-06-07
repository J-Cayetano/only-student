'use strict';
const { Model } = require('sequelize');

const PROTECTED_ATTR = ["leve_id"];

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

    toJSON() {
      const attr = { ...this.get() };

      for (const x of PROTECTED_ATTR) {
        delete attr[x];
      }
      return attr;
    }
  }

  s_level.init(
    {
      leve_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      leve_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
          isAlpha: { msg: "Level name should only contain Alphabets." },
          notNull: { msg: "Level name should not be null." },
          notEmpty: { msg: "Level name should not be empty." }
        }
      },
      leve_description: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },


    {
      sequelize,
      modelName: 's_level',
      timestamps: true,
      createdAt: "leve_createdAt",
      updatedAt: "leve_updatedAt",
      paranoid: true,
      deletedAt: "leve_deletedAt"
    }
  );
  return s_level;
};