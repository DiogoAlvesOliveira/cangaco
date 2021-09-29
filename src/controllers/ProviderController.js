import Provider from '../models/Provider';
import Product from '../models/Product';

class ProviderController {
  async index(req, res) {
    const providers = await Provider.findAll({
      attributes: ['id', 'name', 'cnpj'],
      order: [['id', 'DESC'], [Product, 'id', 'DESC']],
      include: {
        model: Product,
        attributes: ['id', 'name', 'barcode', 'amount'],
      },
    });
    res.json(providers);
  }

  async store(req, res) {
    try {
      const provider = await Provider.create(req.body);
      const {
        id, name, email,
      } = await provider;
      return res.json({
        id, name, email,
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
      const provider = await Provider.findByPk(id, {
        attributes: ['id', 'name', 'cnpj'],
        order: [['id', 'DESC'], [Product, 'id', 'DESC']],
        include: {
          model: Product,
          attributes: ['id', 'name', 'barcode', 'amount'],
        },
      });
      if (!provider) {
        return res.status(400).json({
          errors: ['Provider não existe'],
        });
      }
      return res.json(provider);
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
      const provider = await Provider.findByPk(id);
      if (!provider) {
        return res.status(400).json({
          errors: ['Provider não existe'],
        });
      }
      await provider.destroy();
      return res.json({ delete: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const providerId = req.params.id;

      if (!providerId) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const provider = await Provider.findByPk(providerId);
      if (!provider) {
        return res.status(400).json({
          errors: ['Provider não existe'],
        });
      }
      const providerAtualizado = await provider.update(req.body);
      const {
        id, nome, email, idade,
      } = providerAtualizado;
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

export default new ProviderController();
