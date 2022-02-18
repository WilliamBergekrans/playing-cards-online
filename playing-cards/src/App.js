import React from "react";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import StartView from "./components/StartView";

const App = () => {
  return (
    <Container maxWidth="md">
      <Navbar />
      <StartView />
    </Container>
  );
};

export default App;
