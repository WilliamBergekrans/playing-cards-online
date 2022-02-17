import React from "react";
import Typography from "@mui/material/Typography";
import JoinGame from "./JoinGame";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

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
      <JoinGame />
      <Typography variant="h1" fontSize={"30px"} sx={{ my: "30px" }}>
        Or
      </Typography>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          console.log("clicked");
        }}>
        Create new game
      </Button>
    </Box>
  );
}
