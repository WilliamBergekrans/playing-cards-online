const express = require("express");
const app = express();
const port = 3000;

// Firestore Connection
const { initializeApp, cert } = require("firebase-admin/app");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const routes = require("./routes");

app.use("", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
