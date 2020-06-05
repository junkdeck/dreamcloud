const env = require("./env.json");
const express = require("express");
const cors = require("cors");
const pgp = require("pg-promise")();
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 3000;
const db = pgp(env.DB_URL);
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/dist")));

app.get("/dreams", async (req, res) => {
  console.log("recalling all dreams...");
  try {
    const rows = await db.query("SELECT * FROM dreams ORDER BY id");
    return res.json(rows);
  } catch {
    console.error("error fetching dreams. database running?");
    return res.sendStatus(500);
  }
});

app.post("/dreams", async (req, res) => {
  console.log("remembering new dream...");
  console.log(req.body);
  const title = req.body && req.body.dream && req.body.dream.title;
  const content = req.body && req.body.dream && req.body.dream.body;
  if (title) {
    const query = await db.query(
      "INSERT INTO dreams(title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.json(query);
  } else {
    res.status(500);
  }
});

app.get("*", (req, res) => {
  console.log("going to sleep...");
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`${port} dreaming sheep...`);
});
