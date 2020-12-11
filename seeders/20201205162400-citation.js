'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkInsert('citations', [{
                idUTILISATEURS: 3,
                titre: 'Je sais pas',
                contenu: 'Contenu',
                votePositive: 10,
                voteNegative: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('citations', [{
                idUTILISATEURS: 2,
                titre: 'Je sais eedde',
                contenu: 'UJUJDUIJIU',
                votePositive: 5,
                voteNegative: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
             queryInterface.bulkInsert('citations', [{
                idUTILISATEURS: 2,
                titre: 'Je saiseezz',
                contenu: 'UJUJDUIJIU',
                votePositive: 100,
                voteNegative: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }])
        ])

    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('citations', null, {});

    }
};
