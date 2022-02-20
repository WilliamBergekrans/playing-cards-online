import { Box } from "@mui/system";
import React, { useState } from "react";
import { Grid } from "@mui/material";

export default function Game() {
  const [cardsOnHand, setCardsOnHand] = useState([1, 2, 3, 4, 5]);
  const [cardOnTable, setCardOnTable] = useState(9);
  const [playedCard, setPlayedCard] = useState(10);
  const [won, setWon] = useState(2);
  const [lost, setLost] = useState(1);
  const [cardRemaining, setCardRemaining] = useState(50);

  return (
    <Grid container spacing={2} sx={{ textAlign: "center" }}>
      <Grid item xs={12} sm={6}>
        <h4>{cardOnTable}</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h4>{playedCard}</h4>
      </Grid>
      <Grid item xs={12}>
        <h4>{cardsOnHand}</h4>
      </Grid>
      <Grid item xs={6}>
        <h4>{won}</h4>
      </Grid>
      <Grid item xs={6}>
        <h4>{lost}</h4>
      </Grid>
      <Grid item xs={12}>
        <h4>There are a total of {cardRemaining} cards remaining</h4>
      </Grid>
    </Grid>
  );
}
