'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Citations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idUTILISATEURS: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Utilisateurs',
                    key: 'id'
                }
            },
            titre: {
                allowNull: false,
                type: Sequelize.STRING
            },
            contenu: {
                allowNull: false,
                type: Sequelize.STRING
            },
            votePositive: {

                type: Sequelize.INTEGER
            },
            voteNegative: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Citations');
    }
};