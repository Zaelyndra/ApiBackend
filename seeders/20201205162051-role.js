'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkInsert('roles', [{
                titre: 'Administrateur',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('roles', [{
                titre: 'Utilisateur',
                createdAt: new Date(),
                updatedAt: new Date()
            }])
        ])
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('roles', null, {});
    }
};
