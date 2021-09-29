module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('products', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    barcode: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: true,
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    saller_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'sallers',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'clients',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    provider_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'providers',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('products'),
};
