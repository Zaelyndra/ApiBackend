'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkInsert('categorie_citations', [{
                idCATEGORIES: 1,
                idCITATIONS: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('categorie_citations', [{
                idCATEGORIES: 2,
                idCITATIONS: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }])

        ])
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categorie_citations', null, {});

    }
};
