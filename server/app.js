const express = require("express");
const app = express();
const port = 3000;

const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");

const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// Firestore Connection
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

app.get("/game/create", async (req, res) => {
  const docRef = db.collection("games").doc("newGame");

  await docRef.set({
    id: 1,
    type: "Lovelace",
    player1: "Annika",
    player2: "William",
  });

  res.send("Game number 1 created!");
});

app.get("/game/:id", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
