'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Categorie.belongsToMany(models.Citation, {
        through: 'Categorie_citations',
        as : 'Citations',
        foreignKey : 'idCATEGORIES',
        otherKey : 'idCITATIONS'
      })
    }
  };
  Categorie.init({
    titre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorie',
  });
  return Categorie;
};