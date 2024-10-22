const express = require("express");
const proxy = require("express-http-proxy");
const app = express();

/**
 * Health Check
 */

app.use("/health", (req, res, next) => {
  return res.status(200).json({
    status: "Running",
  });
});

app.use("/user", proxy("http://localhost:8001"));
app.use("/checkout", proxy("http://localhost:8002"));
app.use("/inventory", proxy("http://localhost:8003"));
app.use("/order", proxy("http://localhost:8004"));
app.use("/payment", proxy("http://localhost:8005"));

app.listen(8000, () => {
  console.log(`Listening to port => 8000`);
});
