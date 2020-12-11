'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkInsert('categories', [{
                titre: 'Categorie 1',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('categories', [{
            titre: 'Categorie 2',
            createdAt: new Date(),
            updatedAt: new Date()
        }])

        ])

    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categories', null, {});

    }
};
