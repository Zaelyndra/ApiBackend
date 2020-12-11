'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Utilisateurs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nom: {
                type: Sequelize.STRING,
                allowNull: true
            },
            prenom: {
                type: Sequelize.STRING,
                allowNull: false
            },
            mail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            identifiant: {
                type: Sequelize.STRING,
                allowNull: false

            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            idROLES: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Utilisateurs');
    }
};