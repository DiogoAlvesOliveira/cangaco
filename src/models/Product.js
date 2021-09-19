import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      barcode: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Campo Código de barra precisa ser um número inteiro',
          },
        },
      },
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Campo Valor precisa ser um número',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'products',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Saller, { foreignKey: 'saller_id' });
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
    this.belongsTo(models.Provider, { foreignKey: 'provider_id' });
  }
}
