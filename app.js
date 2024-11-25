const express = require('express');
const app = express();

// Importe a rota do currículo
const curriculoRoutes = require('./routes/curriculoRoutes');

// Use a rota do currículo com o caminho /api
app.use('/api', curriculoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
