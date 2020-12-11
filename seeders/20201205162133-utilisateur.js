'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkInsert('utilisateurs', [{
                idROLES: 1,
                nom: 'Doe',
                prenom: 'John',
                mail: 'jhon@gmail.com',
                identifiant: 'John',
                password: 'root',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('utilisateurs', [{
                idROLES: 2,
                nom: 'Rousseau',
                prenom: 'François',
                mail: 'francois@gmail.com',
                identifiant: 'Franc',
                password: 'root',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('utilisateurs', [{
                idROLES: 2,
                nom: 'Bouet',
                prenom: 'Jacque',
                mail: 'jacque@gmail.com',
                identifiant: 'Jacque',
                password: 'root',
                createdAt: new Date(),
                updatedAt: new Date()
            }])
        ])
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('utilisateurs', null, {});
    }
};
