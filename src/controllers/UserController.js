import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {
        id, name, email, profile,
      } = user;
      return res.json({
        id, name, email, profile,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const userId = req.params.id;
      if (!userId) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await User.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
