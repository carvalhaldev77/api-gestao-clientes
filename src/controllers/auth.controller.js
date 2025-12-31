const db = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'segredo_super_secreto';

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Dados inválidos' });

  const hash = bcrypt.hashSync(password, 8);

  db.run(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, hash],
    function (err) {
      if (err) return res.status(400).json({ error: 'Usuário já existe' });

      res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (err, user) => {
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

      const valid = bcrypt.compareSync(password, user.password);
      if (!valid) return res.status(401).json({ error: 'Credenciais inválidas' });

      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });

      res.json({ token });
    }
  );
};
