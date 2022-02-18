import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function JoinGameButton() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="game-id-form"
          focused
          label="Game ID"
          color="secondary"
          type="text"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
      </div>
    </Box>
  );
}
