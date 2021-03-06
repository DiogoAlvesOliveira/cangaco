import Client from '../models/Client';
// import Product from '../models/Product';

class ClientController {
  async index(req, res) {
    try {
      const clients = await Client.findAll();
      return res.json(clients);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const client = await Client.create(req.body);
      const {
        id, name, email,
      } = await client;
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
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não existe'],
        });
      }
      return res.json(client);
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
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(400).json({
          errors: ['Client não existe'],
        });
      }
      await client.destroy();
      return res.json({ delete: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const clientId = req.params.id;

      if (!clientId) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const client = await Client.findByPk(clientId);
      if (!client) {
        return res.status(400).json({
          errors: ['Client não existe'],
        });
      }
      const clientAtualizado = await client.update(req.body);
      const {
        id, nome, email, idade,
      } = clientAtualizado;
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

export default new ClientController();
