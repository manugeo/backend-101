const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
morgan.token('content', (req, res) =>  JSON.stringify(req.body || null));
morgan.token("custom", ":method :url :status :res[content-length] - :response-time ms :content");
app.use(morgan('custom'));

app.get('/', (req, res) => {
  res.send("Hey there! This is Back-end 101.");
});

const PORT = 3001;
app.listen(PORT, () => console.log("App running on port 3001"));