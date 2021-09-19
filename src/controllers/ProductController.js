import Product from '../models/Product';
import Provider from '../models/Provider';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
      order: [['id', 'DESC'], [Provider, 'id', 'DESC']],
      include: {
        model: Provider,
        attributes: ['id', 'name'],
      },
    });
    res.json(products);
  }

  async store(req, res) {
    try {
      const product = await Product.create(req.body);
      const {
        id, nome, email, idade,
      } = await product;
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
      const product = await Product.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [Provider, 'id', 'DESC']],
        include: {
          model: Provider,
          attributes: ['id', 'name'],
        },
      });
      if (!product) {
        return res.status(400).json({
          errors: ['Product não existe'],
        });
      }
      return res.json(product);
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
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(400).json({
          errors: ['Product não existe'],
        });
      }
      await product.destroy();
      return res.json({ delete: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const productId = req.params.id;

      if (!productId) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(400).json({
          errors: ['Product não existe'],
        });
      }
      const productAtualizado = await product.update(req.body);
      const {
        id, nome, email, idade,
      } = productAtualizado;
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

export default new ProductController();
