import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoAmI from "./pages/WhoAmI";
import Menubar from "./pages/Menubar";
import Community from "./pages/Community";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/whoami" element={<WhoAmI />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
