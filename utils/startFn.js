const express = require("express");
const firebaseAdmin = require("firebase-admin");
const app = express();

const serviceAccount = require("../servicekey.json");
const userRoutes = require("../routes/user");
const orderRoutes = require("../routes/orders");
const notFoundMiddleware = require("../middleware/notFound");
const errorHandlerMiddleware = require("../middleware/errorHandler");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://mystic-primacy-324905-default-rtdb.firebaseio.com/",
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const startFn = async (port) => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}🥂`);
  });
};

module.exports = { startFn, firebaseAdmin };
