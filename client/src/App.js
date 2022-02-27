import React from "react";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import StartView from "./components/StartView";
import Game from "./components/Game";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Navbar />
        {/* Router */}
        <Routes>
          <Route path="/" element={<StartView />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </Container>
  );
};

export default App;
