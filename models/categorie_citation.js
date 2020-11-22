'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie_citation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Categorie_citation.init({
    idCATEGORIES: DataTypes.INTEGER,
    idCITATIONS: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categorie_citation',
  });
  return Categorie_citation;
};