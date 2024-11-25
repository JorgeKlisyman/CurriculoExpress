const db = require('../db/database');

const Educacao = {
  async getAll() {
    const result = await db.query('SELECT * FROM educacao');
    return result.rows;
  },
  async add(instituicao, curso) {
    const result = await db.query(
      'INSERT INTO educacao (instituicao, curso) VALUES ($1, $2) RETURNING *',
      [instituicao, curso]
    );
    return result.rows[0];
  },
};

module.exports = Educacao;
