const express = require('express');
const router = express.Router();

router.get('/curriculo', (req, res) => {
  const curriculo = {
    id: 1, // ID do currículo principal
    nome: "Jorge Klisyman Gomes de Oliveira",
    telefone: "(81) 99558-3089",
    email: "klisymanjorge@gm.com",
    experiencia: [
      { id: 1, empresa: "Luigi Bertolli", funcao: "Vendedor" },
      { id: 2, empresa: "Marisa", funcao: "Atendente" },
      { id: 3, empresa: "Coliseum", funcao: "Estoquista" },
      { id: 4, empresa: "Hering", funcao: "Estoquista" }
    ],
    habilidades: [
      { id: 1, habilidade: "Python" },
      { id: 2, habilidade: "Java" },
      { id: 3, habilidade: "JavaScript" },
      { id: 4, habilidade: "SQL" },
      { id: 5, habilidade: "React" }
    ],
    educacao: [
      { id: 1, instituicao: "Universidade Católica de Pernambuco", curso: "Sistemas para Internet" },
      { id: 2, instituicao: "Senai", curso: "Técnico de Informática" },
      { id: 3, instituicao: "Senac", curso: "Vendas" }
    ]
  };

  res.json(curriculo); // Retorna o currículo no formato JSON
});

module.exports = router;
