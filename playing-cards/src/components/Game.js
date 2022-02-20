import { Box } from "@mui/system";
import React, { useState } from "react";

export default function Game() {
  const [cardsOnHand, setCardsOnHand] = useState([1, 2, 3, 4, 5]);
  return (
    <Box>
      <h4>{cardsOnHand}</h4>
    </Box>
  );
}
