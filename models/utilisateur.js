'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Utilisateur extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Utilisateur.hasMany(models.Citation)
            models.Utilisateur.belongsTo(models.Role, {
                foreignKey: {
                    allowNull: true
                }
            })
        }
    };
    Utilisateur.init({
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        mail: DataTypes.STRING,
        identifiant: DataTypes.STRING,
        password: DataTypes.STRING,
        idROLES: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Utilisateur',
    });
    return Utilisateur;
};