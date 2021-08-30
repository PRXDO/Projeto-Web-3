const router = require('express').Router();
const usuario = require('../model/usuario');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const acesstoken = 'token';

router.get('/login', async (req, res) => {
    const {email, senha } = req.query;

    const usuario = await usuario.findOne({ email }).lean();

    if (!usuario) {
        res.status(201).json({
            sucess: false, 
            code: 'DD101_API_ERROR_01', 
            message:"E-mail and/or password invalid"});
    }
    if(await bcrypt.compare(senha, usuario.senha)) {
        const token = jwt.sign({ id: usuario._id, email: usuario.email}, acesstoken)
        return res.json({ sucess: true, data: token })
    }
    res.status(201).json({
        sucess: false, 
        code: 'DD101_API_ERROR_01', 
        message:"E-mail and/or password invalid"});
});

router.post('/cadastro', async (req, res)=>{ //Authenticate usuario
    const { email, senha: plainTextsenha } = req.body
    const senha = await bcrypt.hash(plainTextsenha, 10)

    try{
        const response = await usuario.create({email, senha})
        console.log(response)
    } catch(error) {
        if(error.code === 11000){
            res.status(201)
            return res.json({ 
                sucess: false, 
                message: 'The usuario already exists' })
        }
        throw error
    }
    res.json({ sucess: true })
});

module.exports = router;

//Refs
//https://www.youtube.com/watch?v=mbsmsi7l3r4
//https://www.youtube.com/watch?v=HUJ-YRHAfBI