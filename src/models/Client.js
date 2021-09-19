import Sequelize, { Model } from 'sequelize';

export default class Client extends Model {
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
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'CPF já cadastrado',
        },
        validate: {
          len: {
            args: [11, 14],
            msg: 'Campo CPF deve ter entre 11 e 14 caracteres',
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
      birthday: {
        type: Sequelize.DATE,
        defaultValue: '',
        validate: {
          isDate: {
            msg: 'Campo Data de aniversário recebe apenas data',
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
    this.hasMany(models.Product, { foreignKey: 'client_id' });
  }
}
