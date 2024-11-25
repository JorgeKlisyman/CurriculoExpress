const db = require('../db/database');

const Experiencia = {
  async getAll() {
    const result = await db.query('SELECT * FROM experiencia');
    return result.rows;
  },
  async add(nome_empresa, funcao) {
    const result = await db.query(
      'INSERT INTO experiencia (nome_empresa, funcao) VALUES ($1, $2) RETURNING *',
      [nome_empresa, funcao]
    );
    return result.rows[0];
  },
};

module.exports = Experiencia;
