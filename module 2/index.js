const express = require("express");
const app = express();
app.listen(3000, () => console.log("lisning"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

// POST method route
app.post("/api", (req, res) => {
  // req :  everything
  // res: send things back to the client
  console.log(req.body);
});
