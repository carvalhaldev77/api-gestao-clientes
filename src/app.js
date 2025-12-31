const express = require('express');
const clientsRoutes = require('./routes/clients.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/clients', clientsRoutes);

module.exports = app;
