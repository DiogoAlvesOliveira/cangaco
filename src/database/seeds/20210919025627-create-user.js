const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      name: 'Diogo',
      cpf: '36308281085',
      email: 'diogo@gmail.com',
      registration: 11111,
      profile: 'Administra',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Carlos',
      cpf: '90075788047',
      email: 'carlos@gmail.com',
      registration: 11112,
      profile: 'Administra',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Mario',
      cpf: '36308281085',
      email: 'mario@gmail.com',
      registration: 11113,
      profile: 'Administra',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down: async () => { },
};
