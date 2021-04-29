const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3000, () => console.log("lisning"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const data = [];
const fileName = "data.csv";
// POST method route
app.post("/api", (req, res) => {
  // req :  everything
  // res: send things back to the client

  fs.appendFile(fileName, `\n${req.body.lat},${req.body.lon}`, (err) => {
    if (err) throw err;
  });

  const tempData = fs.readFileSync(fileName, "utf8").split("\n").splice(1);

  tempData.forEach((element) => {
    const lat = element.split(",")[0];
    const lon = element.split(",")[1];
    data.push({ lat, lon });
  });

  res.json({
    status: "success",
    data,
  });
});
