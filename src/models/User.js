import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
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
      registration: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        unique: {
          msg: 'Matricula já cadastrado',
        },
        validate: {
          isInt: {
            msg: 'Campo Matricula precisa ser um número inteiro',
          },
          len: {
            args: [5, 10],
            msg: 'Campo Matricula deve ter entre 5 e 10 caracteres',
          },
        },
      },
      profile: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 13],
            msg: 'Campo Perfil deve ter entre 8 e 13 caracteres',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 12],
            msg: 'Campo senha deve ter entre 5 e 12 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
