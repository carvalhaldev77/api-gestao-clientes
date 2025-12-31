const db = require('../database/database');

exports.createClient = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  const query = `INSERT INTO clients (name, email) VALUES (?, ?)`;

  db.run(query, [name, email], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: this.lastID,
      name,
      email
    });
  });
};

exports.getClients = (req, res) => {
  db.all(`SELECT * FROM clients`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};
