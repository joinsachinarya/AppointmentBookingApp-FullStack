const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");
// const { rootDir } = require("./utils/rootDir");
const homeRoutes = require("./routes/home");
const appointmentsRoutes = require("./routes/appointments");
const sequelize = require("./utils/database");

const app = express();

// app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRoutes);
app.use(appointmentsRoutes);

sequelize
  .sync()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Server listening at 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
