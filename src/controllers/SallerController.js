import Saller from '../models/Saller';
import Product from '../models/Product';

class SallerController {
  async index(req, res) {
    const sallers = await Saller.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
      order: [['id', 'DESC'], [Product, 'id', 'DESC']],
      include: {
        model: Product,
        attributes: ['id', 'url', 'filename'],
      },
    });
    res.json(sallers);
  }

  async store(req, res) {
    try {
      const saller = await Saller.create(req.body);
      const {
        id, nome, email, idade,
      } = await saller;
      return res.json({
        id, nome, email, idade,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => [err.message,
          'Email deve ser único']),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const saller = await Saller.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [Product, 'id', 'DESC']],
        include: {
          model: Product,
          attributes: ['id', 'url', 'filename'],
        },
      });
      if (!saller) {
        return res.status(400).json({
          errors: ['Saller não existe'],
        });
      }
      return res.json(saller);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const saller = await Saller.findByPk(id);
      if (!saller) {
        return res.status(400).json({
          errors: ['Saller não existe'],
        });
      }
      await saller.destroy();
      return res.json({ delete: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const sallerId = req.params.id;

      if (!sallerId) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const saller = await Saller.findByPk(sallerId);
      if (!saller) {
        return res.status(400).json({
          errors: ['Saller não existe'],
        });
      }
      const sallerAtualizado = await saller.update(req.body);
      const {
        id, nome, email, idade,
      } = sallerAtualizado;
      return res.json({
        id, nome, email, idade,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new SallerController();
