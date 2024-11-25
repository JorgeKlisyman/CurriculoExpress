const db = require('../db/database');

const Habilidade = {
  async getAll() {
    const result = await db.query('SELECT * FROM habilidade');
    return result.rows;
  },
  async add(descricao) {
    const result = await db.query(
      'INSERT INTO habilidade (descricao) VALUES ($1) RETURNING *',
      [descricao]
    );
    return result.rows[0];
  },
};

module.exports = Habilidade;
