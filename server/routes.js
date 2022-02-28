const express = require("express");
const router = express.Router();

const { getFirestore } = require("firebase-admin/firestore");

const db = getFirestore();

router.get("/game/create", async (req, res) => {
  const docRef = db.collection("games").doc("newGame");

  await docRef.set({
    id: 1,
    type: "Lovelace",
    player1: "Annika",
    player2: "William",
  });

  res.send("Game number 1 created!");
});

router.get("/game/:id", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});

module.exports = router;
