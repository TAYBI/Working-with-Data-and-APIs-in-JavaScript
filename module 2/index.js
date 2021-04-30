const express = require("express");
const Datastore = require("nedb");
const app = express();
app.listen(3000, () => console.log("lisning"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

// GET method route
app.get("/api", (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

// POST method route
app.post("/api", (req, res) => {
  // req :  everything
  // res: send things back to the client
  const timestamp = Date.now();
  const data = { ...req.body, timestamp };
  database.insert(data);
  res.json(data);
});
