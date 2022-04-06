const app = require("./app");

const { PORT, MONGODB } = require("./utils/config");
app.listen(PORT, () => {
  console.log("running on PORT " + PORT);
});
