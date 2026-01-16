const express = require('express')
const users = require('../models/users')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

const secretKey = 'your_secret_key'

authRouter.post('register', (req, res) => {
  const { username, password } = req.body

  const user = { username, password }
  users.push(user)

  res.status(201).json({ message: 'Usuário criado com sucesso', user })
});

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username)
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciais inválidas' })
  }

  // Gerar o token JWT (JSON Web Token)
  const token = jwt.sign({message: 'Teste' }, secretKey, { expiresIn: '1h' })

  res.json({ message: 'Login bem-sucedido', token })

});

module.exports = authRouter
