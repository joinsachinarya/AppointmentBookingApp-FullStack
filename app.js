const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const homeRoutes = require("./routes/home");
const { rootDir } = require("./utils/rootDir");
const sequelize = require("./utils/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(rootDir, "views", "404.html"));
});

sequelize
  .sync()
  .then((res) => {
    // console.log(res);
    app.listen(3000, () => {
      console.log("Server listening at 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
