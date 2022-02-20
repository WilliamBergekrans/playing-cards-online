import React from "react";
import Typography from "@mui/material/Typography";
import JoinGameButton from "./JoinGameButton";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Game from "./Game";

export default function StartView() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}>
      <Typography variant="h1" fontSize={"30px"} sx={{ my: "30px" }}>
        Enter ID to join
      </Typography>
      <JoinGameButton />
      <Typography variant="h1" fontSize={"30px"} sx={{ my: "30px" }}>
        Or
      </Typography>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        onClick={() => {
          console.log("clicked");
        }}>
        Create new game
      </Button>
      <Game />
    </Box>
  );
}
