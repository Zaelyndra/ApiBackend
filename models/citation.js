'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Citation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Citation.belongsTo(models.Utilisateur, {
        foreignKey : {
          allowNull : true
        }
      })
      models.Citation.belongsToMany(models.Categorie, {
        through : 'Categorie_citations',
        as : 'Categories',
        foreignKey : 'idCITATIONS'
      })
    }
  };
  Citation.init({
    idUTILISATEURS: DataTypes.INTEGER,
    titre: DataTypes.STRING,
    contenu: DataTypes.STRING,
    votePositive: DataTypes.INTEGER,
    voteNegative: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Citation',
  });
  return Citation;
};