const jwt = require('jsonwebtoken');
const SECRET = 'segredo_super_secreto';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: 'Token não fornecido' });

  const token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
};
