const app = require("./src/app");
const { PORT } = require("./src/config/server.config");

app.listen(PORT, () => {
  console.log(`Listening to port => ${PORT}`);
});
