const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'Diogo',
      email: 'diogo@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Carlos',
      email: 'carlos@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Mario',
      email: 'mario@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down: async () => { },
};
