const router = require('express').Router();
const post = require('../model/Post');

const jwt = require('jsonwebtoken');

const acesstoken = 'token';

router.get('/busca', async (req, res) => {
  const { token } = req.query;
  const { nome } = req.query;
  const regex = new RegExp(nome, 'i');

  try {
    jwt.verify(token, acesstoken);
    const response = await post.find({ nome: { $regex: regex } });

    if (response.length === 0) {
      res.status(201);
      return res.json({
        sucess: 'false',
        message: 'This data doesnt exist in the database.',
      });
    } else {
      console.log(response);
      return res.json({ sucess: true, data: response });
    }
  } catch (error) {
    res.status(404);
    return res.json({ sucess: false, message: 'User not allowed' });
  }
});

router.post('/cadastro', async (req, res) => {
  const { token } = req.body;
  const { nome, urlImg } = req.body;

  try {
    jwt.verify(token, acesstoken);
    const response = await post.create({
      nome,
      urlImg,
    });
    console.log(response);
  } catch (error) {
    if (error.code === 11000) {
      res.status(201);
      return res.json({ status: 'error', error: 'Artigo já registrado' });
    } else {
      res.status(404);
      return res.json({ status: 'error', error: 'Usuário não está logado' });
    }
    throw error;
  }
  //res.json({ status: 'ok' })
});

module.exports = router;
