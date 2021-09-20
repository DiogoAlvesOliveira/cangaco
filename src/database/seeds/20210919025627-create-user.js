const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      name: 'Ryu',
      cpf: '689.177.180-35',
      email: 'ryu@gmail.com',
      registration: 11118,
      profile: 'Administrador',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Adriano Lenda',
      cpf: '218.841.700-30',
      email: 'adriano@gmail.com',
      registration: 11117,
      profile: 'Administrador',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Olivio',
      cpf: '546.287.210-09',
      email: 'olivio@gmail.com',
      registration: 11116,
      profile: 'Administrador',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down: async () => { },
};
