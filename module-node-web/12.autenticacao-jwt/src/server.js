
const express = require('express');
const authRouter = require('./routers/auth');
const protectedRouter = require('./routers/protected');

const app = express();

app.use(express.json());

app.use('/auth',authRouter); // Rotas de autenticação
app.use('/protected',protectedRouter); // Rotas protegidas

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
