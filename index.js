const express = require("express");
const app = express();
const morgan = require("morgan");
const { getJoyas, getJoyasFiltros } = require("./consultas");
const { superMiddleware } = require('./middlewares')

app.use(morgan("dev"));
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});

app.get("/joyas", superMiddleware, async (req, res) => {
  const params = req.query;
  const data = await getJoyas(params);
  res.json(data);
});

app.get("/joyas/filtros", superMiddleware, async (req, res) => {
  const params = req.query;
  const data = await getJoyasFiltros(params);
  res.json(data);
});
