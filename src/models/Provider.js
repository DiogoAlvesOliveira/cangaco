import Sequelize, { Model } from 'sequelize';

export default class Provider extends Model {
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
      cnpj: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'CNPJ já cadastrado',
        },
        validate: {
          len: {
            args: [14, 18],
            msg: 'Campo CNPJ deve ter entre 14 e 18 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      cep: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 10],
            msg: 'Campo CEP precisa ser entre 8 a 10 caracteres',
          },
        },
      },
      adress: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo Endereço precisa ter entre 3 a 255 caractere',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'provider_id' });
  }
}
