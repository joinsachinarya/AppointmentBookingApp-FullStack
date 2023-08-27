const express = require("express");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home");
const appointmentsRoutes = require("./routes/appointments");
const sequelize = require("./utils/database");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(homeRoutes);
app.use(appointmentsRoutes);

sequelize
  .sync()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Synced with db");
      console.log("Server listening at 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
