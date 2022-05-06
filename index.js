const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(express.json());
morgan.token('content', (req, res) =>  JSON.stringify(req.body || null));
morgan.token("custom", ":method :url :status :res[content-length] - :response-time ms :content");
app.use(morgan('custom'));

app.get('/', (req, res) => {
  res.send("Boom Boom Boom!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("App running on port 3001"));