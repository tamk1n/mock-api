const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: 'Example item', createdAt: new Date().toISOString() }
];

app.get('/', (_req, res) => {
  res.json({
    name: 'Mock API',
    endpoints: ['GET /health', 'GET /items', 'POST /items']
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/items', (_req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const { name } = req.body;

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'name is required' });
  }

  const item = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name: name.trim(),
    createdAt: new Date().toISOString()
  };

  items.push(item);
  res.status(201).json(item);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Mock API listening on port ${port}`);
});
